import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import { Buscador } from "../ContenidoPrincipal/Buscador";
import { ContenedorPrincipal } from "../ContenidoPrincipal/ContenedorPrincipal";

import { TableroFacturas } from "./TableroFacturas";
import { FiltraFacturas } from "./FiltraFacturas";

export default function Facturas(){
    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <TableroFacturas/>
                <FiltraFacturas/>
            </ContenedorPrincipal>

        </div>
    )
}
