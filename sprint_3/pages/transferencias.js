import React from "react";

import { MenuIzquierdo } from "../components/Dashboard/MenuDerecho/MenuIzquierdo";

import { MenuDerecho } from "../components/Dashboard/MenuDerecho/MenuDerecho";

import { Footer } from "../components/Dashboard/Footer/Footer";

import ContenedorPrincipal from "../components/Dashboard/PrincipalTransferencias/GeneralTransferencias";

import estilosPantilla from "@/styles/stylePlantilla.module.css";

function Transferencias() {
  return (
    <div className={estilosPantilla.gridDashboard}>
      <MenuIzquierdo />
      <ContenedorPrincipal />
      <MenuDerecho />
      <Footer />
    </div>
  );
}

export default Transferencias;
