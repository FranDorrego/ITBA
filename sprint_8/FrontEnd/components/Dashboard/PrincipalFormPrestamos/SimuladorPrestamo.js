import estilosDashboard from '@/styles/styleDashboard.module.css'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { pidePrestamo } from '../API_Datos_Personales.js'
import { useRef } from 'react';
import { ERROR, TransferenciaEXITOSA } from '@/components/Alert/Alert.js';
import Alert from "@/components/Alert/Alert";
import { prestamoExistoso } from '@/components/Alert/Alert.js';

export function SimuladorPrestamo({interesesAPagar, cuotasDe, totalAPagar, porcentaje, plata}){

    const { handleSubmit} = useForm();
    const alertRef = useRef();

    const onSubmit = async (data)  => {
        if (totalAPagar == "") {
          return swal("Por favor rellena los datos solicitados", "");
        }
        alertRef.current.carga();

        if ( await pidePrestamo( totalAPagar )) {
            alertRef.current.muestraContenido(
                prestamoExistoso(`Se acreditaron $ ${totalAPagar}`)
              );
        } else {
            return alertRef.current.muestraContenido(ERROR("Ocurrio un error, por favor vuelve a intentar"));
        }
      };


    return(
        <div className={estilosDashboard.divMonto}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Simulador</h1>

                <div className={estilosDashboard.cantidadCuotas}>
                    <h1>Cuotas de</h1>
                    <input type="number" placeholder="$xxxxx" id="cuotas_de" value={cuotasDe} readOnly />
                </div>

                <div className={estilosDashboard.cantidadCuotas}>

                    <span className={estilosDashboard.cantidadCuotas}>
                        <h1>Interes a pagar</h1>
                        <input type="text" placeholder="$xxxxx" id="intereses_a_pagar" value={interesesAPagar} readOnly/>
                    </span>

                    <span className={estilosDashboard.botonesSimulador}>
                        <button id="btn_porcentaje" onClick={porcentaje}>%</button>
                        <button id="btn_plata" onClick={plata}>$</button>
                    </span>

                </div>

                <div className={estilosDashboard.cantidadCuotas}>
                    <h1>Total a pagar</h1>
                    <input type="text" placeholder="$xxxxx" id="total_a_pagar" value={totalAPagar} readOnly/>
                </div>


                <button className={estilosDashboard.derechoBoton} id={estilosDashboard.solicitarPrestamo} type='submit' >Solicitar el prestamo</button>
                <Alert ref={alertRef} />
            </form>
        </div>
    )
}