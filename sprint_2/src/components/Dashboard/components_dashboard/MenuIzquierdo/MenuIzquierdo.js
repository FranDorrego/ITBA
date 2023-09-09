import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'

import { BotonIzquierdo } from './BotonIzquierdo';
import { BotonesFinalMenuIzquierdo } from './BotonesFinalMenuIzquierdo';
import { Titulo } from '../Titulo';
import { BotonesIzquierdos } from './BotonesIzquierdos'

import home from '../../../assets-globales/assets/home.svg'
import actividad from '../../../assets-globales/assets/circle-dollar.svg'
import banco from '../../../assets-globales/assets/bank.svg'
import tarjetaDivisas from '../../../assets-globales/assets/tarjeta.svg'
import ayuda from '../../../assets-globales/assets/ayuda.svg'
import cerrarSesion from '../../../assets-globales/assets/cerrar_sesion.svg'

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

// estilosPlantilla.botonSelecionado

export function MenuIzquierdo(customClass){

    const location = useLocation();
    const [botonActivo, setBotonActivo] = useState(location.pathname);

    const cambiarBotonActivo = (nombreBoton) => {
        setBotonActivo(nombreBoton);
    };

    return(
        <div className={estilosPlantilla.menu}>
            <Titulo/>
                <BotonesIzquierdos>
                    {/* LA CUSTOMCLASS ES PARA PONERLE EL ESTILO DE SELECCIONADO */}
                    <BotonIzquierdo text="Inicio" imagen={home} alt="inicio"
                    link="/dashboard"
                    isActive={botonActivo === '/dashboard'}
                    onClick={() => cambiarBotonActivo('/dashboard')}
                    />
                    <BotonIzquierdo text="Actividad" imagen={actividad} alt="actividad" 
                    link="/error"
                    isActive={botonActivo === '/actividad' }
                    onClick={() => cambiarBotonActivo('/actividad')}
                    />
                    <BotonIzquierdo text="Cuentas" imagen={banco} alt="cuentas" 
                    link="/error"
                    isActive={botonActivo === '/cuentas'}
                    onClick={() => cambiarBotonActivo('/cuentas')}
                    />
                    <BotonIzquierdo text="Cambio de divisas" imagen={tarjetaDivisas} alt="cambio_divisas"
                    link="/cambioDivisas"
                    isActive={botonActivo === '/cambioDivisas'}
                    onClick={() => cambiarBotonActivo('/cambioDivisas')} 

                    />
                </BotonesIzquierdos>
                <BotonesFinalMenuIzquierdo>
                    <BotonIzquierdo text="Ayuda" imagen={ayuda} alt="ayuda"/>
                    <BotonIzquierdo text="Cerrar sesión" imagen={cerrarSesion} alt="cerrarSesion" link="/login"/>
                </BotonesFinalMenuIzquierdo>
        </div>
    )
}