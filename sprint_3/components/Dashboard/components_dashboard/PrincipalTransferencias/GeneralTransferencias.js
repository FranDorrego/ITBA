import React from 'react';
import estilosDashboard from '../../styleDashboard.module.css'
import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import { Buscador } from '../Principal/Buscador';
import { ContenedorPrincipal } from '../Principal/ContenedorPrincipal';
import { Saludo } from '../Principal/Saludo';
import { TransBotones } from './TransBotones.js';
import { TransFormulario } from './Formulario.js';

// Componente principal
const DivContenedorPrincipal = () => {
  return (
    <div className={estilosPlantilla.general}>
      <Buscador />
      <ContenedorPrincipal>
        <Saludo texto="Transferencias" />
        <TransBotones />
        <TransFormulario />
      </ContenedorPrincipal>
    </div>
  );
};



export default DivContenedorPrincipal;
