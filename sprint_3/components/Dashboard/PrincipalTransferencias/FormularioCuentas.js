import estilosDashboard from '@/styles/styleDashboard.module.css'
import ImporteDiv from '@/components/Dashboard/PrincipalTransferencias/ImporteDiv'
import MotivoDiv from '@/components/Dashboard/PrincipalTransferencias/MotivoDiv'
import swal from 'sweetalert'
import { useForm } from 'react-hook-form'
import { LabelErrorLogin } from "@/components/Login/Generales/LabelErrorLogin";
import { validarImporte } from '@/components/Dashboard/PrincipalTransferencias/validate/validarImporte'
import { enviaTransferencia } from '../API_Datos_Personales'

import Alert from "@/components/Alert/Alert";
import { ERROR, PagoRECHAZADO, PagoEXITOSO } from "@/components/Alert/Alert";
import { useRef } from "react";

export default function FormularioCuentas() {

  const { register, formState: { errors }, handleSubmit } = useForm();
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
          alertRef.current.muestraContenido( PagoEXITOSO("Transferiste $ " + data.importe) );
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
    <form action="" className={estilosDashboard.transFormulario} onSubmit={handleSubmit(onSubmit)}>
      <ImporteDiv>

        <input placeholder="Ingrese..." id="importe" type="number" className={estilosDashboard.transInputs}
          {...register('importe',
            {
              required: true,
              validate: validarImporte
            })}
        />
      </ImporteDiv>

      {errors.importe && <LabelErrorLogin>Importe no valido</LabelErrorLogin>}
      <MotivoDiv />
      <button type="submit" className={estilosDashboard.transBotones} id="boton-transferir" >
        <h1>Transferir</h1>
      </button>
      <Alert ref={alertRef}/>
    </form>
  )
}
