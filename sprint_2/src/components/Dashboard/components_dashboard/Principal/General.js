import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import estilosDashboard from '../../styleDashboard.module.css'
import { Buscador } from './Buscador';
import { ContenedorPrincipal } from './ContenedorPrincipal';
import { Saludo } from './Saludo';
import { Movimientos } from './Movimientos';
import { TarjetaMovimientoIngreso } from './TarjetaMovimientoIngreso';
import { TarjetaMovimientoRetiro } from './TarjetaMovimientoRetiro';
import { TrajetasSaludo } from './TarjetasSaludo';
import { Historial, Nombre } from '../API.js'

export function General(){
    return(
        <div className={estilosPlantilla.general}>
            <Buscador />
            <ContenedorPrincipal>
                <Saludo usuario={Nombre()} texto="Hola, "/>
                <TrajetasSaludo />
                <h1 className={estilosDashboard.movimientosTitulo}>Ultimos movimientos {">"} </h1>
                <Movimientos>
                <ExaminaDatos />
                </Movimientos>
            </ContenedorPrincipal>
        </div>
    )
}

function ExaminaDatos(){
    let historial = Historial();
    return historial.map((movimiento, index) => {
        if (movimiento.ingreso){
            return ( <TarjetaMovimientoIngreso key={index} monto={movimiento.monto} fecha={movimiento.fecha}/> );
        }else{
            return ( <TarjetaMovimientoRetiro key={index} monto={movimiento.monto} fecha={movimiento.fecha}/> );
        }
    })
}