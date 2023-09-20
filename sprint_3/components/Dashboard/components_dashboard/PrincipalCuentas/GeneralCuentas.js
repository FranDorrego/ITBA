import React from 'react';
import estilosPantilla from '@/styles/stylePlantilla.module.css'
import { Buscador } from '../Principal/Buscador';
import { ContenedorPrincipal } from '../Principal/ContenedorPrincipal';
import { Saludo } from '../Principal/Saludo';
import { Renglon } from './RenglonDatos.js';
import { Nombre } from '../API_Datos_Personales.js'

// Componente principal
function CuentasPrincipal () {
  let datos = Nombre();
  return (
    <div className={estilosPantilla.general}>
      <Buscador />
      <ContenedorPrincipal>
        <Saludo texto="Datos de Tu Cuenta" />

        <div className="tarjeta">
          <Renglon titulo="Alias" dato={datos.NombreBase} />
          <Renglon titulo="CBU" dato={datos.CBUBase} />
          <Renglon titulo="Cuenta Nro" dato={datos.CuentaBase} />
        </div>
      </ContenedorPrincipal>
    </div>
  );
};


export default CuentasPrincipal;