import ingreso from '../../assets/circle-arrow-down.svg'
import estilosDashboard from '../../styleDashboard.module.css'

export function TarjetaMovimientoIngreso({monto, fecha}){
    return(
        <div className={estilosDashboard.movimientosTarjeta}>
            <span className={estilosDashboard.movimientoTexto}>
                <h1>${monto}</h1>
                <h2>{fecha}</h2>
            </span>     

            <span className={estilosDashboard.motivo}>
                <h1 className={estilosDashboard.ingreso}>Ingreso</h1>
                <img src={ingreso} alt="ingreso" />
            </span>
            
        </div>
    )
}