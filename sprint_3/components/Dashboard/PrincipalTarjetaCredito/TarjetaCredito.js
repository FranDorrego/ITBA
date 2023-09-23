import { Buscador } from "../ContenidoPrincipal/Buscador"
import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import { Tarjeta } from "../MenuDerecho/Tarjeta";
import { Movimientos } from "../ContenidoPrincipal/Movimientos";
import { HistorialTarjetas } from "../PrincipalActividad/HistorialTarjetas";
import { ContenedorPrincipal } from "../ContenidoPrincipal/ContenedorPrincipal";
import style from "./TarjetaCredito.module.css"
import { TableroResumen } from "./TableroResumen";
import { Saludo } from "../ContenidoPrincipal/Saludo";

export default function TarjetaCredito(){
    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>

                <Saludo texto={"Resumen Tarjeta de Credito"}/>

                <div className={style.resumen}>
                    <Tarjeta/>
                    <TableroResumen/>
                </div>

                <Saludo texto={"Historial de consumos"}/>

                <Movimientos>
                    <HistorialTarjetas motivo={"Tarjeta de Credito"} />
                </Movimientos>

            </ContenedorPrincipal>

        </div>
    )
}


