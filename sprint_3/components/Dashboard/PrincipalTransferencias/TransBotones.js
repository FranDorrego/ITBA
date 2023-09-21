import React, { useState } from 'react';

import estilosDashboard from '@/styles/styleDashboard.module.css'

import cerrarSesion from '@/public/cerrar_sesion.svg'


export function TransBotones () {
    const [seleccionado, setSeleccionado] = useState('transferir_nueva');

    const handleClick = (id) => {
        setSeleccionado(id);
    }

    return (
        <div className={estilosDashboard.transBotonesDiv}>
            <TransBoton 
                id="transferir_nueva" 
                texto="Nueva transferencia" 
                onClick={() => handleClick("transferir_nueva")}
                activo={seleccionado === "transferir_nueva"}
            />
            <TransBoton 
                id="transferir_mis_cuentas" 
                texto="Transferir a mis cuentas" 
                onClick={() => handleClick("transferir_mis_cuentas")}
                activo={seleccionado === "transferir_mis_cuentas"}
            />
        </div>
    );
}

const TransBoton = ({ id, texto, onClick, activo }) => {
    const claseBoton = activo ? `${estilosDashboard.transBotones} ${estilosDashboard.transSeleccionado}` : estilosDashboard.transBotones;

    return (
        <button className={claseBoton} id={id} onClick={onClick}>
            <img src={cerrarSesion} alt="" />
            <h1>{texto}</h1>
        </button>
    );
};


