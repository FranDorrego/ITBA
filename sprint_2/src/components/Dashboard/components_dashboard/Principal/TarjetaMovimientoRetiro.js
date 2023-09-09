import retiro from '../../assets/circle-arrow-up.svg'
import estilosDashboard from '../../styleDashboard.module.css'


export function TarjetaMovimientoRetiro({monto, fecha}){
    return(
        <div className={estilosDashboard.movimientosTarjeta}>
            <span className={estilosDashboard.movimientoTexto}>
                <h1>${monto}</h1>
                <h2>{fecha}</h2>
            </span>
            <span className={estilosDashboard.motivo}>
                <h1 className={estilosDashboard.retiro}>retiro</h1>
                <img src={retiro} alt="retiro" />
            </span>
        </div>
    )
}