import { Buscador } from "../ContenidoPrincipal/Buscador"
import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import estilosDashboard from "@/styles/styleDashboard.module.css";
import { Tarjeta } from "../MenuDerecho/Tarjeta";
import { Movimientos } from "../ContenidoPrincipal/Movimientos";
import { HistorialTarjetas } from "../PrincipalActividad/HistorialTarjetas";
import { ContenedorPrincipal } from "../ContenidoPrincipal/ContenedorPrincipal";
import style from "./TarjetaCredito.module.css"
import { TableroResumen } from "./TableroResumen";

export default function TarjetaCredito(){
    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>

                <div className={style.resumen}>
                    <Tarjeta/>
                    <TableroResumen/>
                </div>

                <Movimientos>
                    <HistorialTarjetas motivo={"Consumo con Tarjeta de Credito"} />
                </Movimientos>

            </ContenedorPrincipal>

        </div>
    )
}


