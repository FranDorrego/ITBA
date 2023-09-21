import { MenuIzquierdo } from "@/components/Dashboard/MenuDerecho/MenuIzquierdo";

import { MenuDerecho } from "@/components/Dashboard/MenuDerecho/MenuDerecho";

import { Footer } from "@/components/Dashboard/Footer/Footer";

import CuentasPrincipal from "@/components/Dashboard/PrincipalCuentas/GeneralCuentas";

import estilosPantilla from "@/styles/stylePlantilla.module.css";

function Cuentas() {
  return (
    <div className={estilosPantilla.gridDashboard}>
      <MenuIzquierdo />
      <CuentasPrincipal />
      <MenuDerecho />
      <Footer />
    </div>
  );
}

export default Cuentas;
