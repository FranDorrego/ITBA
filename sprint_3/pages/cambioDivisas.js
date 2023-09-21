import { MenuIzquierdo } from "@/components/Dashboard/MenuDerecho/MenuIzquierdo";

import { MenuDerecho } from "@/components/Dashboard/MenuDerecho/MenuDerecho";

import { Footer } from "@/components/Dashboard/Footer/Footer";

import estilosPantilla from "@/styles/stylePlantilla.module.css";

import { GeneralCambioDivisa } from "@/components/Dashboard/PrincipalCambioDivisas/GeneralCambioDivisa";

function CambioDivisas() {
  return (
    <div className={estilosPantilla.gridDashboard}>
      <MenuIzquierdo />
      <GeneralCambioDivisa />
      <MenuDerecho />
      <Footer />
    </div>
  );
}

export default CambioDivisas;
