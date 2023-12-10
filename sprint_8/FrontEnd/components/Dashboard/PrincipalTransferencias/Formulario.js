import estilosDashboard from "@/styles/styleDashboard.module.css";
import RadioDiv from "./RadioDiv";
import ImporteDiv from "./ImporteDiv";
import MotivoDiv from "./MotivoDiv";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { LabelErrorLogin } from "@/components/Login/Generales/LabelErrorLogin";
import { validarImporte } from "./validate/validarImporte";
import { enviaTransferencia } from "../API_Datos_Personales";
import { Saludo } from "../ContenidoPrincipal/Saludo";
import Alert from "@/components/Alert/Alert";
import { ERROR, PagoRECHAZADO, TransferenciaEXITOSA } from "@/components/Alert/Alert";
import { useRef } from "react";

// Componente para el formulario de transferencia
export function TransFormulario() {
  const { register, formState: { errors }, handleSubmit, } = useForm();
  const alertRef = useRef();

  const onSubmit = async (data) => {
    if (data.importe === "") {
      swal("Por favor rellena los datos solicitados", "");
    } else {
      alertRef.current.carga();
      try {
        const transferenciaResultado = await enviaTransferencia({
          Monto: data.importe,
          destinatario: data.cbuAlias,
        });

        if (transferenciaResultado.error) {
          alertRef.current.muestraContenido(ERROR());
        } else if (transferenciaResultado.message) {
          alertRef.current.muestraContenido(
            TransferenciaEXITOSA(`Transferiste $ ${data.importe}`)
          );
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
      <Saludo texto="CBU o IBAN*" />
      <input
        placeholder="Ingrese CBU o IBAN ..."
        id="cbuAlias"
        type="text"
        className={estilosDashboard.transInputs}
        {...register("cbuAlias", {
          required: true,
          // validate: validarCBU
        })}
      />
      {errors.cbuAlias?.type === "required" && (
        <LabelErrorLogin>CBU/CVU/IBAN requerido</LabelErrorLogin>
      )}
      {/* { errors.cbuAlias && <LabelErrorLogin>CBU/CVU no valido</LabelErrorLogin> } */}

      <ImporteDiv>
        <input
          placeholder="Ingrese Cantidad a transferir ..."
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

      <button
        type="submit"
        className={estilosDashboard.transBotones}
        id="boton-transferir"
      >
        <h1>Transferir</h1>
      </button>

      <Alert ref={alertRef} />
    </form>
  );
}

// Componente para el motivo
