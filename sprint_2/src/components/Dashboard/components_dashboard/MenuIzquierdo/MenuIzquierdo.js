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


export function MenuIzquierdo(){
    return(
        <div className={estilosPlantilla.menu}>
            <Titulo/>
                <BotonesIzquierdos>
                    {/* LA CUSTOMCLASS ES PARA PONERLE EL ESTILO DE SELECCIONADO */}
                    <BotonIzquierdo text="Inicio" imagen={home} alt="inicio" customClass={estilosPlantilla.botonSelecionado}/>
                    <BotonIzquierdo text="Actividad" imagen={actividad} alt="actividad" />
                    <BotonIzquierdo text="Cuentas" imagen={banco} alt="cuentas" />
                    <BotonIzquierdo text="Cambio de divisas" imagen={tarjetaDivisas} alt="cambio_divisas" />
                </BotonesIzquierdos>
                <BotonesFinalMenuIzquierdo>
                    <BotonIzquierdo text="Ayuda" imagen={ayuda} alt="ayuda"/>
                    <BotonIzquierdo text="Cerrar sesión" imagen={cerrarSesion} alt="cerrarSesion" link="/login"/>
                </BotonesFinalMenuIzquierdo>
        </div>
    )
}