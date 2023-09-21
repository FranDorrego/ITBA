import estilosPlantilla from '@/styles/stylePlantilla.module.css'
import estilosDashboard from '@/styles/styleDashboard.module.css'
import { Buscador } from '../Principal/Buscador';
import { ContenedorPrincipal } from '../Principal/ContenedorPrincipal';
import { Movimientos } from '../Principal/Movimientos';
import { HistorialTarjetas } from './HistorialTarjetas.js'


export function ContenidoActividad(){
    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <h1 className={estilosDashboard.movimientosTitulo}>Ultimos movimientos {">"} </h1>
                <Movimientos>
                <HistorialTarjetas />
                </Movimientos>
            </ContenedorPrincipal>
        </div>
    )
}





