import TarjetaFactura from "./TarjetaFactura.js";
import { Facturas } from "../API_Datos_Personales.js";

export default function HistorialFacturas({ pago = null }) {
  var historial = Facturas();

  return historial
    .filter((movimiento) => pago === null || pago === movimiento.pagado)
    .map((movimiento, index) => {
      return (
        <TarjetaFactura
          key={index}
          ID={movimiento.ID}
          monto={movimiento.monto}
          fecha={movimiento.fecha}
          motivo={movimiento.motivo}
          pagado={movimiento.pagado}
        />
      );
    });
}
