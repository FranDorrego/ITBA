import style from "./PrincipalFacturas.module.css"
import estilosDashboard from "@/styles/styleDashboard.module.css";
import { Saludo } from "../ContenidoPrincipal/Saludo";

export function TableroFacturas(){
    return(
        <div className={style.resumenDatos}>
            <Saludo texto={"Registra y paga aqui tus facturas  >"}/>
            <button  className={estilosDashboard.botonDivisas}>+ Registra una Factura a Pagar</button> 
        </div>
    )
}