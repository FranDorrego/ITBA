import style from "./TarjetaCredito.module.css"
import { Datos_tarjeta_credito } from "../API_Datos_Personales"

export function TableroResumen(){

    const props = Datos_tarjeta_credito()

    return(
        <div className={style.resumenDatos}>
            <span> <h1>Gastos: </h1> <h2> $ {props.gasto_mensual} </h2> </span>
            <span> <h1>Saldo Disponible: </h1> <h2> $ {props.saldo} </h2> </span>
            <span> <h1>Fecha de cierre: </h1> <h2> {props.fecha_cierre} </h2>  </span>
        </div>
    )
}
