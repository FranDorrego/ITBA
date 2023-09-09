import React from 'react';
import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import estilosDashboard from '../../styleDashboard.module.css'
import copy from './assets/copy.svg'
import estiloscuenta from './Style.css'
import { Buscador } from '../Principal/Buscador';
import { ContenedorPrincipal } from '../Principal/ContenedorPrincipal';

// Componente principal
function CuentasPrincipal () {
  return (
    <div className={estilosPlantilla.general}>
      <Buscador />
      <ContenedorPrincipal>
        <Saludo titulo="Datos de Tu Cuenta" />

        <div className="tarjeta">
          <Renglon titulo="Alias" dato="luis" />
          <Renglon titulo="CBU" dato="0000065134214875642" />
          <Renglon titulo="Cuenta Nro" dato="CA$ 61058478692" />
        </div>
      </ContenedorPrincipal>
    </div>
  );
};

const Renglon = ({ titulo, dato }) => {
  return (
    <div className="renglon">
      <h1 className="titulo">{titulo}</h1>
      <h1 className="titulo">{dato}</h1>
      <BotonCopiar />
    </div>
  );
};

const BotonCopiar = () => {
  return(
    <div className='button'>
      <img src={copy} />
      <h1 className="copiar">Copiar</h1>
    </div>
  )
}
// Componente para los encabezados
const Saludo = ({ titulo }) => {
  return <h1 className={estilosDashboard.saludo}>{titulo}</h1>;
};



export default CuentasPrincipal;