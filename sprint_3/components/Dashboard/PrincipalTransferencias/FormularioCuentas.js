import estilosDashboard from '@/styles/styleDashboard.module.css'
import ImporteDiv from '@/components/Dashboard/PrincipalTransferencias/ImporteDiv'
import MotivoDiv from '@/components/Dashboard/PrincipalTransferencias/MotivoDiv'
import swal from 'sweetalert'
import { useForm } from 'react-hook-form'
import { LabelErrorLogin } from "@/components/Login/Generales/LabelErrorLogin";
import { validarImporte } from '@/components/Dashboard/PrincipalTransferencias/validate/validarImporte'
import { enviaTransferencia } from '../API_Datos_Personales'

export default function FormularioCuentas() {

    const {register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = async (data) => {
      console.log(data)
      if (data.importe == "") {
          swal("Por favor rellena los datos solicitados", "");
      } else {
          try {
              const transferenciaResultado = await enviaTransferencia({ Monto: parseFloat(data.importe), destinatario: "Tus otras Cuentas", CBU: "Cuenta Propia" });
              if (transferenciaResultado === 100) {
                swal("No tenes fondos suficientes para enviar la transferencia","");
              }
              else if (transferenciaResultado === true) {
                swal("Transferencia realizada", "Monto: " + data.importe);
              } else {
                  swal("Ocurrio un error, por favor vuelve a intentar", "");
              }
          } catch (error) {
              console.error('Error al realizar la transferencia:', error);
              swal("Ocurrio un error, por favor vuelve a intentar", "");
          }
      }
    }

  return (
    <form action="" className={estilosDashboard.transFormulario} onSubmit={handleSubmit(onSubmit)}>
                <ImporteDiv>
                                
                <input placeholder="Ingrese..." id="importe"  type="number" className={estilosDashboard.transInputs}
                {...register('importe', 
                {
                    required:true,
                    validate: validarImporte
                    })}
                    />
                </ImporteDiv>

                { errors.importe && <LabelErrorLogin>Importe no valido</LabelErrorLogin> }
                <MotivoDiv />
                <button type="submit" className={estilosDashboard.transBotones} id="boton-transferir" >
                <h1>Transferir</h1>
                </button>
            </form>
  )
}