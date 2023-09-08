import retiro from '../../assets/circle-arrow-up.svg'
import estilosDashboard from '../../styleDashboard.module.css'


export function TarjetaMovimientoRetiro({monto, fecha}){
    return(
        <div class={estilosDashboard.movimientosTarjeta}>
            <span class={estilosDashboard.movimientoTexto}>
                <h1>${monto}</h1>
                <h2>{fecha}</h2>
            </span>
            <span class={estilosDashboard.motivo}>
                <h1 class={estilosDashboard.retiro}>retiro</h1>
                <img src={retiro} alt="retiro" />
            </span>
        </div>
    )
}