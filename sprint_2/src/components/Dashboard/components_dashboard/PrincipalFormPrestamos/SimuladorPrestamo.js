import estilosDashboard from '../../styleDashboard.module.css'

export function SimuladorPrestamo(){
    return(
        <div className={estilosDashboard.divMonto}>

            <h1>Simulador</h1>

            <div className={estilosDashboard.cantidadCuotas}>
                <h1>Cuotas de</h1>
                <input type="number" placeholder="$xxxxx" id="cuotas_de" readonly />
            </div>

            <div className={estilosDashboard.cantidadCuotas}>

                <span className={estilosDashboard.cantidadCuotas}>
                    <h1>Interes a pagar</h1>
                    <input type="text" placeholder="$xxxxx" id="intereses_a_pagar" />
                </span>

                <span className={estilosDashboard.botonesSimulador}>
                    <button id="btn_porcentaje">%</button>
                    <button id="btn_plata">$</button>
                </span>

            </div>

            <div className={estilosDashboard.cantidadCuotas}>
                <h1>Total a pagar</h1>
                <input type="text" placeholder="$xxxxx" id="total_a_pagar" />
            </div>
            
            
            <button className={estilosDashboard.derechoBoton} id={estilosDashboard.solicitarPrestamo}>Solicitar el prestamo</button>
        </div>
    )
}