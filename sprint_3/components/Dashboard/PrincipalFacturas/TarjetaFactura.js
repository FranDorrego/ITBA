import estilosDashboard from "@/styles/styleDashboard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TarjetaFactura({ ID, monto, fecha, motivo, pagado }) {
  return (
    <Link className={estilosDashboard.movimientosTarjeta} href={`facturas/${ID}`}
    >
      <span className={estilosDashboard.movimientoTexto}>
        <h1>${monto}</h1>
        <h2>Vence: {fecha}</h2>
      </span>

      <h2 className={estilosDashboard.motivoTexto}>{motivo}</h2>

      {pagado ? <ImageNoPagado /> : <ImagePagado />}
    </Link>
  );
}

function ImagePagado() {
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
    </span>
  );
}

function ImageNoPagado() {
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
