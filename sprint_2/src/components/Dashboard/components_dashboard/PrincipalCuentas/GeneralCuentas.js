import React from 'react';
import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import copy from './assets/copy.svg'
import estiloscuenta from './Style.css'
import { Buscador } from '../Principal/Buscador';
import { ContenedorPrincipal } from '../Principal/ContenedorPrincipal';
import { Saludo } from '../Principal/Saludo';
import { Renglon } from './RenglonDatos.js';
import { Nombre } from '../API_Datos_Personales.js'

// Componente principal
function CuentasPrincipal () {
  let datos = Nombre();
  return (
    <div className={estilosPlantilla.general}>
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