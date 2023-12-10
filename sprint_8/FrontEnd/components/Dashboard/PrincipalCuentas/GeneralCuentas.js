import React from "react";
import estilosPantilla from "@/styles/stylePlantilla.module.css";
import Style from "@/styles/cuentas/Style.module.css"
import { Buscador } from "../ContenidoPrincipal/Buscador";
import { ContenedorPrincipal } from "../ContenidoPrincipal/ContenedorPrincipal";
import { Saludo } from "../ContenidoPrincipal/Saludo";
import { Renglon } from "./RenglonDatos.js";
import { Datos_personales } from "../API_Datos_Personales.js";
import { formateador } from "../API_Datos_Personales.js";

// Componente principal
function CuentasPrincipal() {
  let datos = Datos_personales();
  return (
    <div className={estilosPantilla.general}>
      <Buscador />
      <ContenedorPrincipal>
        <Saludo texto="Datos de Tu Cuenta" />

        {datos.map((cuenta, index) => (
          <div key={index} className={Style.tarjeta}>
            <Renglon titulo="Tipo de cuenta" dato={cuenta.tipo_cuenta.tipo_cuenta} />
            <Renglon titulo="ID Cuenta" dato={cuenta.account_id} />
            <Renglon titulo="IBAN" dato={cuenta.iban} />
            <Renglon titulo="Saldo en Su moneda" dato={formateador(cuenta.balance)} />
          </div>
        ))}

      </ContenedorPrincipal>
    </div>
  );
}

export default CuentasPrincipal;
