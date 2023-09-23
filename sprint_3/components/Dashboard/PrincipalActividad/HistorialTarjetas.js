import { TarjetaMovimientoIngreso } from "../ContenidoPrincipal/TarjetaMovimientoIngreso";
import { TarjetaMovimientoRetiro } from "../ContenidoPrincipal/TarjetaMovimientoRetiro";
import { Historial } from "../API_Datos_Personales.js";

export function HistorialTarjetas({ motivo = null }) {
  let historial = Historial();

  return historial
    .filter((movimiento) => motivo === null || movimiento.motivo.includes(motivo))
    .map((movimiento, index) => {

      var linkRedireccion = "actividad";
      if ( movimiento.motivo.includes("Tarjeta de Credito") ){
        var linkRedireccion = "credito";
      }else if (movimiento.motivo.includes("Factura")){
        var linkRedireccion = "facturas";
      }

      if (movimiento.ingreso) {
        return (
          <TarjetaMovimientoIngreso
            key={index}
            ID = {movimiento.ID}
            monto={movimiento.monto}
            fecha={movimiento.fecha}
            motivo={movimiento.motivo}
            link={linkRedireccion}
          />
        );
      } else {
        return (
          <TarjetaMovimientoRetiro
            key={index}
            ID = {movimiento.ID}
            monto={movimiento.monto}
            fecha={movimiento.fecha}
            motivo={movimiento.motivo}
            link={linkRedireccion}
          />
        );
      }
    });
}
