import { MenuIzquierdo } from "../components/Dashboard/MenuIzquierdo/MenuIzquierdo";

import { MenuDerecho } from "../components/Dashboard/MenuDerecho/MenuDerecho";

import { Footer } from "../components/Dashboard/Footer/Footer";

import estilosPantilla from "@/styles/stylePlantilla.module.css";

import { ContenidoActividad } from "../components/Dashboard/PrincipalActividad/ContenidoActividad";

function Actividad() {
  return (
    <div className={estilosPantilla.gridDashboard}>
      <MenuIzquierdo />
      <ContenidoActividad />
      <MenuDerecho />
      <Footer />
    </div>
  );
}

export default Actividad;
