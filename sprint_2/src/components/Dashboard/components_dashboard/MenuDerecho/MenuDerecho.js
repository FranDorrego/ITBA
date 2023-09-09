import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import { SpanDerecho } from './SpanDerecho';
import { ElementosMenuDercho } from './ElementosMenuDerecho';
import { BotonDerecho } from './BotonDerecho';
import cbu from '../../../assets-globales/assets/CIRCLE-INFO.svg'
import prestamos from '../../../assets-globales/assets/circle-arrow-down-deposito.svg'
import transferencias from '../../../assets-globales/assets/transferencias.svg'
import { Tarjeta } from '../../components_dashboard/MenuDerecho/Tarjeta';
import { BotonesDerechos } from './BotonesDerechos';

export function MenuDerecho(){
    return(
        <div className={estilosPlantilla.menuDerecho}>
            <SpanDerecho/>
            <ElementosMenuDercho>
                <h1 className='titulo'>Acciones rápidas</h1>
                <BotonDerecho text="Mi CBU" imagen={cbu} link="/error"/>
                <BotonDerecho text="Prestamos" imagen={prestamos} link="/prestamos"/>
                <BotonDerecho text="Transferencias" imagen={transferencias} link="/transferencias"/>
                <Tarjeta />
            </ElementosMenuDercho>
        </div>

    )
}