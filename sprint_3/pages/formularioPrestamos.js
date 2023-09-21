import { MenuIzquierdo } from "../components/Dashboard/MenuIzquierdo/MenuIzquierdo";

import { MenuDerecho } from "../components/Dashboard/MenuDerecho/MenuDerecho";

import { Footer } from "../components/Dashboard/Footer/Footer";

import estilosPantilla from "@/styles/stylePlantilla.module.css";

import { GeneralFormPrestamos } from "@/components/dashboard/PrincipalFormPrestamos/GeneralFormPrestamos";

function FormularioPrestamos() {
  return (
    <div className={estilosPantilla.gridDashboard}>
      <MenuIzquierdo />
      <GeneralFormPrestamos />
      <MenuDerecho />
      <Footer />
    </div>
  );
}

export default FormularioPrestamos;
