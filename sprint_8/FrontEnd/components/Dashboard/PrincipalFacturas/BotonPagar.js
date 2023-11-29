import stylePrincipalFacturas from "@/components/Dashboard/PrincipalFacturas/PrincipalFacturas.module.css";
import { facturas_marcaPagada } from "../API_Datos_Personales";
import { useRouter } from "next/router";

import Alert from "@/components/Alert/Alert";
import { PagoEXITOSO, PagoRECHAZADO, ERROR } from "@/components/Alert/Alert";
import { useRef } from "react";

export function BotonPagarFactura({ ID }) {
  var props = {};
  const router = useRouter();
  const alertRef = useRef(); // Crea una referencia

  if (ID === undefined) {
    let routeDIR = router.query;
    ID = routeDIR.Num_Compra;

    props.cuota = routeDIR.Numero_Factura !== undefined ? false : true;
  }
  props.ID = ID;

  return (
    <div>
      <button
        className={stylePrincipalFacturas.botonDivisasChico}
        onClick={async () => await pagar(props, alertRef)} // Pasa la referencia como argumento
      >
        Pagar
      </button>
      <Alert ref={alertRef} /> {/* Renderiza el componente Alert pasando la referencia */}
    </div>
  );
}

async function pagar(props, alertRef) {
  alertRef.current.carga(); // Usa el método carga() del componente Alert
  try {
    const pagoResultado = await facturas_marcaPagada(props);
    if (pagoResultado === 100) {
      alertRef.current.muestraContenido(PagoRECHAZADO())
    } else if (pagoResultado === true) {
      alertRef.current.muestraContenido(PagoEXITOSO())
    } else {
      alertRef.current.muestraContenido(ERROR())
    }
  } catch (error) {
    alertRef.current.muestraContenido(ERROR())
    console.error("Error al realizar la transferencia:", error);
  }
}
