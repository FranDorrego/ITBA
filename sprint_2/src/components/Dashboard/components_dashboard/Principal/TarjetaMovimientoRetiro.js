import retiro from '../../assets/circle-arrow-up.svg'
import estilosDashboard from '../../styleDashboard.module.css'


export function TarjetaMovimientoRetiro({monto, fecha, motivo}){

    const formateoMontos = monto.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
        useGrouping: true,
    });

    return(
        <div className={estilosDashboard.movimientosTarjeta}>
            <span className={estilosDashboard.movimientoTexto}>
                <h1>${formateoMontos}</h1>
                <h2>{fecha}</h2>
            </span>

            <h2 className={estilosDashboard.motivoTexto}>{motivo}</h2>

            <span className={estilosDashboard.motivo}>
                <h1 className={estilosDashboard.retiro}>retiro</h1>
                <img src={retiro} alt="retiro" />
            </span>
        </div>
    )
}