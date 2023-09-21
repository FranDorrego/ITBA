import estilosPlantilla from '@/styles/stylePlantilla.module.css'

import estilosDashboard from '@/styles/styleDashboard.module.css'

import { Buscador } from '../ContenidoPrincipal/Buscador';

import { ContenedorPrincipal } from '../ContenidoPrincipal/ContenedorPrincipal';

import { Saludo } from '../ContenidoPrincipal/Saludo';

import { Movimientos } from '../ContenidoPrincipal/Movimientos';

import { BotonPrestamo } from './BotonPrestamo';

import { DialogPrestamo } from './DialogPrestamo';

import { HistorialTarjetas } from '../PrincipalActividad/HistorialTarjetas.js'


export function GeneralPrestamos(){
    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <Saludo texto="Prestamos"/>
                <h1 className={estilosDashboard.movimientosTitulo}>Ultimos movimientos {">"} </h1>
                <Movimientos>
                <HistorialTarjetas motivo="Prestamo" />
                </Movimientos>
                <BotonPrestamo>Solicitar prestamo</BotonPrestamo>
                <DialogPrestamo />
            </ContenedorPrincipal>
        </div>
    )
}