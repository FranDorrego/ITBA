import stylePrincipalFacturas from "@/components/Dashboard/PrincipalFacturas/PrincipalFacturas.module.css"
import { facturas_marcaPagada } from "../API_Datos_Personales";
import { useRouter } from "next/router"
import swal from "sweetalert";

export function BotonPagarFactura({ID}){
    const router = useRouter();
    const routeDIR = router.query
    const  Numero_Factura  = ID !== undefined ? ID : routeDIR.Numero_Factura;
    return (
        <button className={stylePrincipalFacturas.botonDivisasChico} onClick={async () => await pagar(Numero_Factura)} > Pagar </button>
    )
}

async function pagar( ID ){
    try {
        const pagoResultado = await facturas_marcaPagada( {ID} );
        if (pagoResultado === 100) {
            swal("No tenes fondos suficientes para realizar este pago","");
        }
        else if (pagoResultado === true) {
            swal("Pago Exitoso", "");
        } else {
            swal("Ocurrio un error, por favor vuelve a intentar", "");
        }
    } catch (error) {
        console.error('Error al realizar la transferencia:', error);
        swal("Ocurrio un error, por favor vuelve a intentar", "");
    }
}