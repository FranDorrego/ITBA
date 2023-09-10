import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import estilosDashboard from '../../styleDashboard.module.css'
import { Buscador } from '../Principal/Buscador';
import { ContenedorPrincipal } from '../Principal/ContenedorPrincipal';
import { Movimientos } from '../Principal/Movimientos';
import { TarjetaMovimientoIngreso } from '../Principal/TarjetaMovimientoIngreso';
import { TarjetaMovimientoRetiro } from '../Principal/TarjetaMovimientoRetiro';
import { Historial } from '../API.js'


export function ContenidoActividad(){
    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <h1 className={estilosDashboard.movimientosTitulo}>Ultimos movimientos {">"} </h1>
                <Movimientos>
                <ExaminaDatos />
                </Movimientos>
            </ContenedorPrincipal>
        </div>
    )
}

function ExaminaDatos(){
    return Historial().map((movimiento, index) => {
        if (movimiento.ingreso){
            return ( <TarjetaMovimientoIngreso key={index} monto={movimiento.monto} fecha={movimiento.fecha}/> );
        }else{
            return ( <TarjetaMovimientoRetiro key={index} monto={movimiento.monto} fecha={movimiento.fecha}/> );
        }
    })
}



