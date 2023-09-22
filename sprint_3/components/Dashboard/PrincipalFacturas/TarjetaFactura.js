import estilosDashboard from "@/styles/styleDashboard.module.css";
import styles from "./PrincipalFacturas.module.css";
import Image from "next/image";
import Link from "next/link";
import { facturas_marcaPagada } from "../API_Datos_Personales";
import { useRouter } from "next/router";

const DATA = {
  filtro: null,
  estado: true,
  nombreFactura: '', 
  montoPagar: '',
  fechaVencimiento: '',
}


export default function TarjetaFactura({ ID, monto, fecha, motivo, pagado }) {
  return (
    <div className={estilosDashboard.movimientosTarjeta}>
      <Link href={`facturas/${ID}`}>
        <span className={estilosDashboard.movimientoTexto}>
          <h1>${monto}</h1>
          <h2>Vence: {fecha}</h2>
        </span>
      </Link>

      <h2 className={estilosDashboard.motivoTexto}>
        <Link href={`facturas/${ID}`}>{motivo}</Link>{" "}
      </h2>

      {pagado ? <ImagePagado /> : <ImageNOPagado ID={ID} />}
    </div>
  );
}

function ImageNOPagado({ ID }) {
  const router = useRouter();
  return (
    <span className={estilosDashboard.motivo}>
      <h1 className={estilosDashboard.retiro}>No Pagado</h1>
      <Image
        className={estilosDashboard.motivoFoto}
        src="/main/circle-arrow-up.svg"
        alt="No Pagado"
        width={20}
        height={20}
      />
      <button
        className={styles.botonDivisasChico}
        onClick={async () => {
          await facturas_marcaPagada({ID});
          router.reload();
        }}
      >
        {" "}
        Marcar Como pagada{" "}
      </button>
    </span>
  );
}

function ImagePagado() {
  return (
    <span className={estilosDashboard.motivo}>
      <h1 className={estilosDashboard.ingreso}>Pagado</h1>
      <Image
        className={estilosDashboard.motivoFoto}
        src="/main/circle-arrow-down.svg"
        alt="Pagado"
        width={20}
        height={20}
      />
    </span>
  );
}
