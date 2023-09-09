import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import { Buscador } from '../Principal/Buscador';
import { ContenedorPrincipal } from '../Principal/ContenedorPrincipal';
import { Saludo } from '../Principal/Saludo';
import { ContenedorMonto } from './ContenedorMonto';
import arg from '../../assets/ARS.png'
import usd from '../../assets/USD.png'
import { ConfirmarDivisas } from './ConfirmarDivisas';
import { SpanCambioDivisas } from './SpanCambioDivisas';



export function GeneralCambioDivisa(){
    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <Saludo texto="Cambio de divisas"/>
                <ContenedorMonto textPrincipal="Monto de origen" placeholder="Origen" banderaDefault={arg}/>
                <SpanCambioDivisas texto="A"/>
                <ContenedorMonto textPrincipal="Monto de convertido" placeholder="Convertido" banderaDefault={usd}/>
                <ConfirmarDivisas />
            </ContenedorPrincipal>
        </div>
    )
}