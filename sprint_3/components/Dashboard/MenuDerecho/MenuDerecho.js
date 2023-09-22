import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import { SpanDerecho } from "./SpanDerecho";
import { ElementosMenuDercho } from "./ElementosMenuDerecho";
import { BotonDerecho } from "./BotonDerecho";
import { Tarjeta } from "./Tarjeta";
import { Saludo } from "../ContenidoPrincipal/Saludo";

export function MenuDerecho() {
  return (
    <div className={estilosPlantilla.menuDerecho}>
      <SpanDerecho />
      <ElementosMenuDercho>
        <Saludo texto={"Acciones rápidas"}/>
        <BotonDerecho text="Mi CBU" imagen="/menu-derecho/CIRCLE-INFO.svg" link="/cuentas" />
        <BotonDerecho
          text="Prestamos"
          imagen="/menu-derecho/circle-arrow-down-deposito.svg"
          link="/prestamos"
        />
        <BotonDerecho
          text="Transferencias"
          imagen="/menu-derecho/transferencias.svg"
          link="/transferencias"
        />
        <Tarjeta />
      </ElementosMenuDercho>
    </div>
  );
}
