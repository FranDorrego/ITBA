import estilosPlantilla from "@/styles/stylePlantilla.module.css";

import { BotonIzquierdo } from "../MenuIzquierdo/BotonIzquierdo";
import { BotonesFinalMenuIzquierdo } from "../MenuIzquierdo/BotonesFinalMenuIzquierdo";
import { Titulo } from "../Titulo";
import { BotonesIzquierdos } from "../MenuIzquierdo/BotonesIzquierdos";

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
          imagen="/menu-izquierdo/home.svg"
          alt="inicio"
          link="/dashboard"
          isActive={botonActivo === "/dashboard"}
          onClick={() => cambiarBotonActivo("/dashboard")}
        />
        <BotonIzquierdo
          text="Actividad"
          imagen="/menu-izquierdo/circle-dollar.svg"
          alt="actividad"
          link="/actividad"
          isActive={botonActivo === "/actividad"}
          onClick={() => cambiarBotonActivo("/actividad")}
        />
        <BotonIzquierdo
          text="Cuentas"
          imagen="/menu-izquierdo/bank.svg"
          alt="cuentas"
          link="/cuentas"
          isActive={botonActivo === "/cuentas"}
          onClick={() => cambiarBotonActivo("/cuentas")}
        />
        <BotonIzquierdo
          text="Cambio de divisas"
          imagen="/menu-izquierdo/cambio.svg"
          alt="cambio_divisas"
          link="/cambioDivisas"
          isActive={botonActivo === "/cambioDivisas"}
          onClick={() => cambiarBotonActivo("/cambioDivisas")}
        />
        <BotonIzquierdo
          text="Tarjeta Credito"
          imagen="/menu-izquierdo/cambio.svg"
          alt="tarjeta_credito"
          link="/credito"
          isActive={botonActivo === "/credito"}
          onClick={() => cambiarBotonActivo("/credito")}
        />
        <BotonIzquierdo
          text="Facturas"
          imagen="/menu-izquierdo/cambio.svg"
          alt="facturas"
          link="/facturas"
          isActive={botonActivo === "/facturas"}
          onClick={() => cambiarBotonActivo("/facturas")}
        />
        <BotonIzquierdo
          text="Mi CBU"
          imagen="/menu-derecho/CIRCLE-INFO.svg"
          id={estilosPlantilla.botonesAuxIzquierda}
          link="/cuentas"
          isActive={botonActivo === "/cbu"}
          onClick={() => cambiarBotonActivo("/cbu")}
        />
        <BotonIzquierdo
          text="Prestamos"
          imagen="/menu-derecho/circle-arrow-down-deposito.svg"
          id={estilosPlantilla.botonesAuxIzquierda}
          link="/prestamos"
          isActive={botonActivo === "/prestamos"}
          onClick={() => cambiarBotonActivo("/prestamos")}
        />
        <BotonIzquierdo
          text="Transferencias"
          imagen="/menu-derecho/transferencias.svg"
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
        <BotonIzquierdo 
          text="Ayuda" 
          imagen="/menu-derecho/ayuda.svg" 
          alt="ayuda" />
        <BotonIzquierdo
          text="Cerrar sesión"
          imagen="/menu-derecho/cerrar_sesion.svg"
          alt="cerrarSesion"
          link="/"
        />
      </BotonesFinalMenuIzquierdo>
    </div>
  );
}
