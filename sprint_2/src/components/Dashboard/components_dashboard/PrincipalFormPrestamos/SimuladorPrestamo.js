import estilosDashboard from '../../styleDashboard.module.css'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

export function SimuladorPrestamo({interesesAPagar, cuotasDe, totalAPagar, porcentaje, plata}){

    const { handleSubmit} = useForm();
    const onSubmit = (data) =>{
        swal("Prestamo pedido", "Monto: " + (totalAPagar))
        console.log(totalAPagar) // ESTO ES PARA QUE VEAS EL VALOR QUE TIRA 
        // PedirPrestamo(data.monto); // LLAMAR A LA FUNCION
    }
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
            </form>
        </div>
    )
}