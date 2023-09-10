import React from 'react';
import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import copy from './assets/copy.svg'
import estiloscuenta from './Style.css'
import { Buscador } from '../Principal/Buscador';
import { ContenedorPrincipal } from '../Principal/ContenedorPrincipal';
import { Saludo } from '../Principal/Saludo';
import { Renglon } from './RenglonDatos.js';
import { Nombre } from '../API.js'

// Componente principal
function CuentasPrincipal () {
  return (
    <div className={estilosPlantilla.general}>
      <Buscador />
      <ContenedorPrincipal>
        <Saludo texto="Datos de Tu Cuenta" />

        <div className="tarjeta">
          <Renglon titulo="Alias" dato={Nombre()} />
          <Renglon titulo="CBU" dato="0000065134214875642" />
          <Renglon titulo="Cuenta Nro" dato="CA$ 61058478692" />
        </div>
      </ContenedorPrincipal>
    </div>
  );
};


export default CuentasPrincipal;