
import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import { Buscador } from "../ContenidoPrincipal/Buscador";
import { ContenedorPrincipal } from "../ContenidoPrincipal/ContenedorPrincipal";
import FormAyuda from "./FormAyuda";
import { Saludo } from "../ContenidoPrincipal/Saludo";

export default function GeneralAyuda() {
  return (
    <div className={estilosPlantilla.general}>
        <Buscador />
        <ContenedorPrincipal>
            <Saludo texto="Ayuda"/>
            <FormAyuda />
        </ContenedorPrincipal>
    </div>
)
}
