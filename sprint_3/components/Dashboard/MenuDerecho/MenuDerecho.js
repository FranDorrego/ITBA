import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import { SpanDerecho } from "./SpanDerecho";
import { ElementosMenuDercho } from "./ElementosMenuDerecho";
import { BotonDerecho } from "./BotonDerecho";
import { Tarjeta } from "./Tarjeta";

export function MenuDerecho() {
  return (
    <div className={estilosPlantilla.menuDerecho}>
      <SpanDerecho />
      <ElementosMenuDercho>
        <h1 className="titulo">Acciones rápidas</h1>
        <BotonDerecho text="Mi CBU" imagen="/CIRCLE-INFO.svg" link="/cuentas" />
        <BotonDerecho
          text="Prestamos"
          imagen="/circle-arrow-down-deposito.svg"
          link="/prestamos"
        />
        <BotonDerecho
          text="Transferencias"
          imagen="/transferencias.svg"
          link="/transferencias"
        />
        <Tarjeta />
      </ElementosMenuDercho>
    </div>
  );
}
