import estilosDashboard from "@/styles/styleDashboard.module.css";
import RadioDiv from "./RadioDiv";
import ImporteDiv from "./ImporteDiv";
import MotivoDiv from "./MotivoDiv";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { LabelErrorLogin } from "@/components/Login/Generales/LabelErrorLogin";
import { validarImporte } from "./validate/validarImporte";
import { enviaTransferencia } from "../API_Datos_Personales";

import Alert from "@/components/Alert/Alert";
import { ERROR, PagoRECHAZADO, TransferenciaEXITOSA } from "@/components/Alert/Alert";
import { useRef } from "react";

// Componente para el formulario de transferencia
export function TransFormulario() {
  const { register, formState: { errors }, handleSubmit, } = useForm();
  const alertRef = useRef();

  const onSubmit = async (data) => {
    if (data.importe == "") {
      swal("Por favor rellena los datos solicitados", "");
    } else {
      alertRef.current.carga();
      try {
        const transferenciaResultado = await enviaTransferencia({ Monto: parseFloat(data.importe), destinatario: data.cbuAlias, CBU: data.cbuAlias, });
        if (transferenciaResultado === 100) {
          alertRef.current.muestraContenido(PagoRECHAZADO());
        } else if (transferenciaResultado === true) {
          alertRef.current.muestraContenido( TransferenciaEXITOSA("Transferiste $ " + data.importe) );
        } else {
          alertRef.current.muestraContenido(ERROR());
        }
      } catch (error) {
        console.error("Error al realizar la transferencia:", error);
        alertRef.current.muestraContenido(ERROR());
      }
    }
  };

  return (
    <form
      action=""
      className={estilosDashboard.transFormulario}
      onSubmit={handleSubmit(onSubmit)}
    >
      <RadioDiv>
        <span className={estilosDashboard.transFormularioSpan}>
          <input
            type="radio"
            id="cbu"
            className={estilosDashboard.transFormularioRadio}
            name="opcion-radio"
            {...register("cbuAliasRadio", {
              required: true,
            })}
          />
          <label>CBU / CVU</label>
        </span>
        <span className={estilosDashboard.transFormularioSpan}>
          <input
            type="radio"
            id="alias"
            className={estilosDashboard.transFormularioRadio}
            name="opcion-radio"
            {...register("cbuAliasRadio", {
              required: true,
            })}
          />
          <label>ALIAS</label>
        </span>
      </RadioDiv>
      {errors.cbuAliasRadio?.type === "required" && (
        <LabelErrorLogin>CBU/CVU/ALIAS/ requerido</LabelErrorLogin>
      )}

      <input
        placeholder="Ingrese..."
        id="cbu_alias"
        type="text"
        className={estilosDashboard.transInputs}
        {...register("cbuAlias", {
          required: true,
          // validate: validarCBU
        })}
      />
      {errors.cbuAlias?.type === "required" && (
        <LabelErrorLogin>CBU/CVU/ALIAS/ requerido</LabelErrorLogin>
      )}
      {/* { errors.cbuAlias && <LabelErrorLogin>CBU/CVU no valido</LabelErrorLogin> } */}

      <ImporteDiv>
        <input
          placeholder="Ingrese..."
          id="importe"
          type="number"
          className={estilosDashboard.transInputs}
          {...register("importe", {
            required: true,
            validate: validarImporte,
          })}
        />
      </ImporteDiv>

      {errors.importe && <LabelErrorLogin>Importe no valido</LabelErrorLogin>}
      <MotivoDiv />
      <button
        type="submit"
        className={estilosDashboard.transBotones}
        id="boton-transferir"
      >
        <h1>Transferir</h1>
      </button>
      <Alert ref={alertRef}/>
    </form>
  );
}

// Componente para el motivo
