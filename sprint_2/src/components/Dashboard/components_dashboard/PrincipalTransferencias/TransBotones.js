import React from 'react';
import estilosDashboard from '../../styleDashboard.module.css'


// Componente para los botones de transferencia
export function TransBotones (){
    return (
      <div className={estilosDashboard.transBotonesDiv}>
        <TransBoton id="transferir_nueva" texto="Nueva transferencia" />
        <TransBoton id="transferir_mis_cuentas" texto="Transferir a mis cuentas" />
      </div>
    );
};

const TransBoton = ({ id, texto }) => {
    return (
      <a>
        <button className={estilosDashboard.transBotones} id={id}>
          <img src="/assets-globales/assets/cerrar_sesion.svg" alt="" />
          <h1>{texto}</h1>
        </button>
      </a>
    );
};