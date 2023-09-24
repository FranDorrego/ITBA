import stylePrincipalFacturas from "@/components/Dashboard/PrincipalFacturas/PrincipalFacturas.module.css";
import { facturas_marcaPagada } from "../API_Datos_Personales";
import { useRouter } from "next/router";
import swal from "sweetalert";

export function BotonPagarFactura({ ID }) {
  var props = {};
  const router = useRouter();
  
  if (ID === undefined) {
    let routeDIR = router.query;
    ID = routeDIR.Num_Compra;

    props.cuota = routeDIR.Numero_Factura !== undefined ? false : true;
  }
  props.ID = ID;
  return (
    <button
      className={stylePrincipalFacturas.botonDivisasChico}
      onClick={async () => await pagar(props)}
    >
      {" "}
      Pagar{" "}
    </button>
  );
}

async function pagar(props) {
  try {
    const pagoResultado = await facturas_marcaPagada(props);
    if (pagoResultado === 100) {
      swal("No tenes fondos suficientes para realizar este pago", "");
    } else if (pagoResultado === true) {
      swal("Pago Exitoso", "");
    } else {
      swal("Ocurrio un error, por favor vuelve a intentar", "");
    }
  } catch (error) {
    console.error("Error al realizar la transferencia:", error);
    swal("Ocurrio un error, por favor vuelve a intentar", "");
  }
}
