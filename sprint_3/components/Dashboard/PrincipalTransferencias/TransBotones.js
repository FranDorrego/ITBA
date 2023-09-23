import React, { useState } from 'react';

import estilosDashboard from '@/styles/styleDashboard.module.css'
import Image from 'next/image';


export function TransBotones ({ onBotonSeleccionado }) {
    const [seleccionado, setSeleccionado] = useState('');
    const [mostrado, setMostrado] = useState();
    const handleClick = (id) => {
        setSeleccionado(id);
        onBotonSeleccionado(id);
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
            <Image src="/menu-derecho/cerrar_sesion.svg" alt="cerrar-sesion" height={20} width={22}/>
            <h1>{texto}</h1>
        </button>
    );
};


