import TarjetaFactura from "./TarjetaFactura.js";
import { Facturas } from "../API_Datos_Personales.js";
import styles from "./PrincipalFacturas.module.css";

export default function HistorialFacturas({ pago = null }) {
  var historial = Facturas();

  const render = historial
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

  return render.length ? render : <h1 className={styles.tituloHistorial}> No hay datos para mostrar </h1>
}
