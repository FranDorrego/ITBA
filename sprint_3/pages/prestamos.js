import { MenuIzquierdo } from "@/components/Dashboard/MenuIzquierdo/MenuIzquierdo";

import { MenuDerecho } from "@/components/Dashboard/MenuDerecho/MenuDerecho";

import { Footer } from "@/components/Dashboard/Footer/Footer";

import estilosPantilla from "../styles/stylePlantilla.module.css";

import { GeneralPrestamos } from "../components/Dashboard/PrincipalPrestamos/GeneralPrestamos";

function Prestamos() {
  return (
    <div className={estilosPantilla.gridDashboard}>
      <MenuIzquierdo />
      <GeneralPrestamos />
      <MenuDerecho />
      <Footer />
    </div>
  );
}

export default Prestamos;
