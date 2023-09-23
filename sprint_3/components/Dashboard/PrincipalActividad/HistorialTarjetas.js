import { TarjetaMovimientoIngreso } from "../ContenidoPrincipal/TarjetaMovimientoIngreso";
import { TarjetaMovimientoRetiro } from "../ContenidoPrincipal/TarjetaMovimientoRetiro";
import { Historial } from "../API_Datos_Personales.js";

export function HistorialTarjetas({ motivo = null }) {
  let historial = Historial();

  
  return historial
    .filter((movimiento) => motivo === null || motivo === movimiento.motivo)
    .map((movimiento, index) => {

      var linkRedireccion = "actividad";
      if (movimiento.motivo === "Consumo con Tarjeta de Credito"){
        var linkRedireccion = "credito";
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
