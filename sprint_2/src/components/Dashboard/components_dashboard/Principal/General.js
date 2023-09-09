import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import estilosDashboard from '../../styleDashboard.module.css'
import { Buscador } from './Buscador';
import { ContenedorPrincipal } from './ContenedorPrincipal';
import { Saludo } from './Saludo';
import { Movimientos } from './Movimientos';
import { TarjetaMovimientoIngreso } from './TarjetaMovimientoIngreso';
import { TarjetaMovimientoRetiro } from './TarjetaMovimientoRetiro';
import { TrajetasSaludo } from './TarjetasSaludo';

export function General(){
    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <Saludo usuario="User de prueba" texto="Hola, "/>
                <TrajetasSaludo />
                <h1 className={estilosDashboard.movimientosTitulo}>Ultimos movimientos {">"} </h1>
                <Movimientos>
                    <TarjetaMovimientoIngreso monto="123" fecha="1/1/2000"/>
                    <TarjetaMovimientoRetiro monto="123" fecha="1/1/2000"/>
                </Movimientos>
            </ContenedorPrincipal>
        </div>
    )
}