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

import cbu from '../../../assets-globales/assets/CIRCLE-INFO.svg'
import prestamos from '../../../assets-globales/assets/circle-arrow-down-deposito.svg'
import transferencias from '../../../assets-globales/assets/transferencias.svg'
import avatar from '../../../assets-globales/assets/Avatar.svg'


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
                    link="/cuentas"
                    isActive={botonActivo === '/cuentas'}
                    onClick={() => cambiarBotonActivo('/cuentas')}
                    />
                    <BotonIzquierdo text="Cambio de divisas" imagen={tarjetaDivisas} alt="cambio_divisas"
                    link="/cambioDivisas"
                    isActive={botonActivo === '/cambioDivisas'}
                    onClick={() => cambiarBotonActivo('/cambioDivisas')} 

                    />
                    <BotonIzquierdo text="Mi CBU" imagen={cbu} id={estilosPlantilla.botonesAuxIzquierda} 
                    link="/error"
                    isActive={botonActivo === '/cbu'}
                    onClick={() => cambiarBotonActivo('/cbu')} 
                    />
                    <BotonIzquierdo text="Prestamos" imagen={prestamos}  id={estilosPlantilla.botonesAuxIzquierda} 
                    link="/prestamos"
                    isActive={botonActivo === '/prestamos'}
                    onClick={() => cambiarBotonActivo('/prestamos')} 
                    />
                    <BotonIzquierdo text="Transferencias" imagen={transferencias} id={estilosPlantilla.botonesAuxIzquierda} 
                    link="/transferencias"
                    isActive={botonActivo === '/transferencias'}
                    onClick={() => cambiarBotonActivo('/transferencias')} 
                    />
                    <BotonIzquierdo id={estilosPlantilla.botonesAuxIzquierda} imagen={avatar}
                    link="/error" />
                </BotonesIzquierdos>
                <BotonesFinalMenuIzquierdo>
                    <BotonIzquierdo text="Ayuda" imagen={ayuda} alt="ayuda"/>
                    <BotonIzquierdo text="Cerrar sesión" imagen={cerrarSesion} alt="cerrarSesion" link="/login"/>
                </BotonesFinalMenuIzquierdo>
        </div>
    )
}