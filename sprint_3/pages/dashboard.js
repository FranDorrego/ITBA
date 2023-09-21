import { MenuIzquierdo } from "../components/Dashboard/MenuDerecho/MenuIzquierdo";

import { MenuDerecho } from "../components/Dashboard/MenuDerecho/MenuDerecho";

import { Footer } from "../components/Dashboard/Footer/Footer";

import { General } from "../components/Dashboard/ContenidoPrincipal/General";

import estilosPlantilla from "@/styles/stylePlantilla.module.css";

function dashboard() {
  return (
    <div className={estilosPlantilla.gridDashboard}>
      <MenuIzquierdo />
      <General />
      <MenuDerecho />
      <Footer />
    </div>
  );
}

export default dashboard;
