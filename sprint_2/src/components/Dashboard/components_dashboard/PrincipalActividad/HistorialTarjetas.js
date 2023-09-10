
import { TarjetaMovimientoIngreso } from '../Principal/TarjetaMovimientoIngreso';
import { TarjetaMovimientoRetiro } from '../Principal/TarjetaMovimientoRetiro';
import { Historial } from '../API_Datos_Personales.js'

export function HistorialTarjetas(){
    let historial = Historial();
    return historial.map((movimiento, index) => {
        if (movimiento.ingreso){
            return ( <TarjetaMovimientoIngreso key={index} monto={movimiento.monto} fecha={movimiento.fecha}/> );
        }else{
            return ( <TarjetaMovimientoRetiro key={index} monto={movimiento.monto} fecha={movimiento.fecha}/> );
        }
    })
}