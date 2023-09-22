import React from "react";
import estilosPantilla from "@/styles/stylePlantilla.module.css";
import Style from "@/styles/cuentas/Style.module.css"
import { Buscador } from "../ContenidoPrincipal/Buscador";
import { ContenedorPrincipal } from "../ContenidoPrincipal/ContenedorPrincipal";
import { Saludo } from "../ContenidoPrincipal/Saludo";
import { Renglon } from "./RenglonDatos.js";
import { datos_personales } from "../API_Datos_Personales.js";

// Componente principal
function CuentasPrincipal() {
  let datos = datos_personales();
  return (
    <div className={estilosPantilla.general}>
      <Buscador />
      <ContenedorPrincipal>
        <Saludo texto="Datos de Tu Cuenta" />

        <div className={Style.tarjeta}>
          <Renglon titulo="Alias" dato={datos.NombreBase} />
          <Renglon titulo="CBU" dato={datos.CBUBase} />
          <Renglon titulo="Cuenta Nro" dato={datos.CuentaBase} />
        </div>
      </ContenedorPrincipal>
    </div>
  );
}

export default CuentasPrincipal;
