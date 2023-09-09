import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import estilosDashboard from '../../styleDashboard.module.css'
import { Buscador } from '../Principal/Buscador';
import { ContenedorPrincipal } from '../Principal/ContenedorPrincipal';
import { Saludo } from '../Principal/Saludo';
import { Movimientos } from '../Principal/Movimientos';
import { TarjetaMovimientoIngreso } from '../Principal/TarjetaMovimientoIngreso';
import { TarjetaMovimientoRetiro } from '../Principal/TarjetaMovimientoRetiro';
import { BotonPrestamo } from './BotonPrestamo';
import { DialogPrestamo } from './DialogPrestamo';

export function GeneralPrestamos(){
    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <Saludo texto="Prestamos"/>
                <h1 className={estilosDashboard.movimientosTitulo}>Ultimos movimientos {">"} </h1>
                <Movimientos>
                    <TarjetaMovimientoIngreso monto="123" fecha="1/1/2000"/>
                    <TarjetaMovimientoRetiro monto="123" fecha="1/1/2000"/>
                </Movimientos>
                <BotonPrestamo>Solicitar prestamo</BotonPrestamo>
                <DialogPrestamo />
            </ContenedorPrincipal>
        </div>
    )
}