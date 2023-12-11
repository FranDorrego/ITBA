import { TarjetaMovimientoIngreso } from "../ContenidoPrincipal/TarjetaMovimientoIngreso";
import { TarjetaMovimientoRetiro } from "../ContenidoPrincipal/TarjetaMovimientoRetiro";
import { Historial } from "../API_Datos_Personales.js";

export function HistorialTarjetas({ motivo = null }) {
  let historial = Historial();

  return historial
    .filter((movimiento) => motivo === null || movimiento.motivo.includes(motivo))
    .map((movimiento, index) => {

      var linkRedireccion = "actividad";
      if ( movimiento.motivo.includes("Compra tarjeta credito") ){
        var linkRedireccion = "credito";
      }else if (movimiento.motivo.includes("Factura")){
        var linkRedireccion = "facturas";
      }

      if (movimiento.monto > 0) {
        return (
          <TarjetaMovimientoIngreso
            key={index}
            id = {movimiento.id}
            monto={movimiento.monto}
            fecha={movimiento.fecha}
            motivo={movimiento.motivo}
            cuenta={movimiento.tipo_cuenta}
            link={linkRedireccion}
          />
        );
      } else {
        return (
          <TarjetaMovimientoRetiro
            key={index}
            id = {movimiento.id}
            monto={movimiento.monto}
            fecha={movimiento.fecha}
            motivo={movimiento.motivo}
            cuenta={movimiento.tipo_cuenta}
            link={linkRedireccion}
          />
        );
      }
    });
}
