import estilosDashboard from '@/styles/styleDashboard.module.css'
import { TotalDineroCuenta } from '../API_Datos_Personales.js'

export function TrajetasSaludo(){

    let datosBase = TotalDineroCuenta();

    return(
        <div className={estilosDashboard.tarjetasDashboard}>
            <span className={`${estilosDashboard.tarjetas} ${estilosDashboard.saldo}`}>
                <h1>Total en cuenta</h1>
                <h2 id="saldo-cuenta-valor">$ {datosBase.total}</h2>
            </span>

            <span className={`${estilosDashboard.tarjetas} ${ estilosDashboard.ingresoTarjeta}`}>
                <h1>Ingresos</h1>
                <h2>+ $ {datosBase.ingresos}</h2>
            </span>

            <span className={`${estilosDashboard.tarjetas} ${estilosDashboard.retiroTarjeta}`}>
                <h1>Retiros</h1>
                <h2>- $ {datosBase.retiros}</h2>
            </span>
        </div>

    )
}