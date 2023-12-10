import style from "./DetalleOperacion.module.css"
import { BotonCopiar } from "../PrincipalCuentas/BotonCopiar";

export function FechayNumero({props}){

    return(
      <div className={style.fechaYNumero}>
  
        <h1>Realizada el: {props.fecha} </h1>
      
        <div className={style.fechaYNumeroID}>
          <h1>Número de operación: {props.id} </h1>
          <BotonCopiar textoACopiar={`Número de operación ${props.id}`} texto={""}/>
        </div>
  
      </div>
    )
  }