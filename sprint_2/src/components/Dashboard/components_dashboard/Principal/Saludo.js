import estilosDashboard from '../../styleDashboard.module.css'

export function Saludo({usuario}){
    return(
        <div className={estilosDashboard.divSaludo}>
            <h1 className={estilosDashboard.saludo}>Hola, {usuario}</h1>
                <div className={estilosDashboard.tarjetasDashboard}>

                    <span className={`${estilosDashboard.tarjetas} ${estilosDashboard.saldo}`}>
                        <h1>Total en cuenta</h1>
                        <h2 id="saldo-cuenta-valor">$304.450</h2>
                    </span>

                    <span className={`${estilosDashboard.tarjetas} ${ estilosDashboard.ingresoTarjeta}`}>
                        <h1>Ingresos</h1>
                        <h2>+ 2.25%</h2>
                    </span>

                    <span className={`${estilosDashboard.tarjetas} ${estilosDashboard.retiroTarjeta}`}>
                        <h1>Retiros</h1>
                        <h2>- $ 10.750</h2>
                    </span>
                </div>
        </div>
    )
}