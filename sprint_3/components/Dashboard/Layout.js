
import { MenuIzquierdo } from "./MenuDerecho/MenuIzquierdo";
import { MenuDerecho } from "./MenuDerecho/MenuDerecho";
import { Footer } from "./Footer/Footer";

import estilosPlantilla from "@/styles/stylePlantilla.module.css";



export default function Layout({children}) {
    return (
        <div className={estilosPlantilla.gridDashboard}>
            <MenuIzquierdo />
            {children}
            <MenuDerecho />
            <Footer />
        </div>
    )
  }
