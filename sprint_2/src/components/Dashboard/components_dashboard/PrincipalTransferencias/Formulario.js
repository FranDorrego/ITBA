import React from 'react';
import estilosDashboard from '../../styleDashboard.module.css'
import { Saludo } from '../Principal/Saludo';

// Componente para el formulario de transferencia
export function TransFormulario (){
    return (
      <form action="" className={estilosDashboard.transFormulario}>
        <RadioDiv />
        <InputDiv placeholder="Ingrese..." id="cbu_alias" />
        <ImporteDiv />
        <MotivoDiv />
        <button type="button" className={estilosDashboard.transBotones} id="boton-transferir" >
          <h1>Transferir</h1>
        </button>
      </form>
    );
  };
  
// Componente para las opciones de radio
const RadioDiv = () => {
return (
    <div className={estilosDashboard.transFormularioRadioDiv}>
    <RadioOpcion id="CBU" name="opcion-radio" label="CBU / CVU" />
    <RadioOpcion id="alias" name="opcion-radio" label="ALIAS" />
    </div>
);
};

const RadioOpcion = ({ id, name, label }) => {
return (
    <span className={estilosDashboard.transFormularioSpan}>
    <input type="radio" id={id} className={estilosDashboard.transFormularioRadio} name={name} />
    <label>{label}</label>
    </span>
);
};

// Componente para los campos de input
const InputDiv = ({ placeholder, id }) => {
return <input type="text" placeholder={placeholder} className={estilosDashboard.transInputs} id={id} />;
};

// Componente para el importe
const ImporteDiv = () => {
return (
    <div className={estilosDashboard.transFormulario}>
    <Saludo texto="Importe*" />
    <InputDiv placeholder="Ingrese..." id="importe" />
    <h1 className={estilosDashboard.AchicaLetra}>
        *El importe mínimo a transferir es de $ 1 y el máximo es de de dos salarios mínimos vitales y
        móviles.
    </h1>
    </div>
);
};

// Componente para el motivo
const MotivoDiv = () => {
return (
    <div className={estilosDashboard.transFormulario}>
    <Saludo titulo="Motivo" />
    <select name="motivo" id="motivo" className={estilosDashboard.transInputs}>
        <option value="varios">Varios</option>
        <option value="compra">Compra</option>
        <option value="p2p">Comercio P2P</option>
        <option value="gasto">Division de gastos / Gastos grupales</option>
    </select>
    </div>
);
};