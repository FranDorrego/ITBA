import style from "./TarjetaCredito.module.css"
import { datos_tarjeta_credito } from "../API_Datos_Personales"

export function TableroResumen(){

    const props = datos_tarjeta_credito()

    return(
        <div className={style.resumenDatos}>
            <h1>Gasto del mes :  $ {props.gasto_mensual}</h1>
            <h1>Saldo Disponible :  $ {props.saldo}</h1>
            <h1>Fecha de cierre :   {props.fecha_cierre}</h1>
        </div>
    )
}
