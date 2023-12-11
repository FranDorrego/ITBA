import React, { useState } from "react";
import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import { Buscador } from "../ContenidoPrincipal/Buscador";
import { ContenedorPrincipal } from "../ContenidoPrincipal/ContenedorPrincipal";
import { Saludo } from "../ContenidoPrincipal/Saludo";
import { TransBotones } from "./TransBotones.js";
import { TransFormulario } from "./Formulario.js";
import { CuentasTransferir } from "./CuentasTransferir";

// Componente principal
const DivContenedorPrincipal = () => {
 
  const [contenidoMostrado, setContenidoMostrado] = useState(null);

  const mostrarContenido = (botonSeleccionado) => {
    if(botonSeleccionado === 'transferir_nueva'){
        setContenidoMostrado(<TransFormulario/>);
    }
    else if(botonSeleccionado === 'transferir_mis_cuentas') {
        setContenidoMostrado(<CuentasTransferir />);
    }
  }

  return (
    <div className={estilosPlantilla.general}>
      <Buscador />
      <ContenedorPrincipal>
        <Saludo texto="Transferencias" />
        <TransFormulario/>
      </ContenedorPrincipal>
    </div>
  );
};

export default DivContenedorPrincipal;
