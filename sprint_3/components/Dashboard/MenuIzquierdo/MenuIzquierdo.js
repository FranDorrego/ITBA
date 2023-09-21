import estilosPlantilla from "@/styles/stylePlantilla.module.css";

import { BotonIzquierdo } from "./BotonIzquierdo";
import { BotonesFinalMenuIzquierdo } from "./BotonesFinalMenuIzquierdo";
import { Titulo } from "../Titulo";
import { BotonesIzquierdos } from "./BotonesIzquierdos";

import { useState } from "react";
import { usePathname } from "next/navigation";

// estilosPlantilla.botonSelecionado

export function MenuIzquierdo(customClass) {
  const location = usePathname();
  const [botonActivo, setBotonActivo] = useState(location);

  const cambiarBotonActivo = (nombreBoton) => {
    setBotonActivo(nombreBoton);
  };

  return (
    <div className={estilosPlantilla.menu}>
      <Titulo />
      <BotonesIzquierdos>
        {/* LA CUSTOMCLASS ES PARA PONERLE EL ESTILO DE SELECCIONADO */}
        <BotonIzquierdo
          text="Inicio"
          imagen="/home.svg"
          alt="inicio"
          link="/dashboard"
          isActive={botonActivo === "/dashboard"}
          onClick={() => cambiarBotonActivo("/dashboard")}
        />
        <BotonIzquierdo
          text="Actividad"
          imagen="/circle-dollar.svg"
          alt="actividad"
          link="/actividad"
          isActive={botonActivo === "/actividad"}
          onClick={() => cambiarBotonActivo("/actividad")}
        />
        <BotonIzquierdo
          text="Cuentas"
          imagen="/bank.svg"
          alt="cuentas"
          link="/cuentas"
          isActive={botonActivo === "/cuentas"}
          onClick={() => cambiarBotonActivo("/cuentas")}
        />
        <BotonIzquierdo
          text="Cambio de divisas"
          imagen="/cambio.svg"
          alt="cambio_divisas"
          link="/cambioDivisas"
          isActive={botonActivo === "/cambioDivisas"}
          onClick={() => cambiarBotonActivo("/cambioDivisas")}
        />
        <BotonIzquierdo
          text="Mi CBU"
          imagen="/CIRCLE-INFO.svg"
          id={estilosPlantilla.botonesAuxIzquierda}
          link="/cuentas"
          isActive={botonActivo === "/cbu"}
          onClick={() => cambiarBotonActivo("/cbu")}
        />
        <BotonIzquierdo
          text="Prestamos"
          imagen="/circle-arrow-down-deposito.svg"
          id={estilosPlantilla.botonesAuxIzquierda}
          link="/prestamos"
          isActive={botonActivo === "/prestamos"}
          onClick={() => cambiarBotonActivo("/prestamos")}
        />
        <BotonIzquierdo
          text="Transferencias"
          imagen="/transferencias.svg"
          id={estilosPlantilla.botonesAuxIzquierda}
          link="/transferencias"
          isActive={botonActivo === "/transferencias"}
          onClick={() => cambiarBotonActivo("/transferencias")}
        />
        <BotonIzquierdo
          id={estilosPlantilla.botonesAuxIzquierda}
          imagen="/Avatar.svg"
          link="/dashboard"
        />
      </BotonesIzquierdos>
      <BotonesFinalMenuIzquierdo>
        <BotonIzquierdo text="Ayuda" imagen="/ayuda.svg" alt="ayuda" />
        <BotonIzquierdo
          text="Cerrar sesión"
          imagen="/cerrar_sesion.svg"
          alt="cerrarSesion"
          link="/login"
        />
      </BotonesFinalMenuIzquierdo>
    </div>
  );
}
