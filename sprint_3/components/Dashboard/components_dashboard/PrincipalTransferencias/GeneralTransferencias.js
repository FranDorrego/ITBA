import React from 'react';

import estilosPlantilla from '@/styles/stylePlantilla.module.css'

import { Buscador } from '../ContenidoPrincipal/Buscador';

import { ContenedorPrincipal } from '../ContenidoPrincipal/ContenedorPrincipal';

import { Saludo } from '../ContenidoPrincipal/Saludo';

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
