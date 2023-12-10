import estilosDashboard from "@/styles/styleDashboard.module.css";
import Link from "next/link";
import { ImagePagado } from "./ImagenPagado";
import { ImageNOPagado } from "./ImagenNOpagado";

const DATA = {
  filtro: null,
  estado: true,
  nombreFactura: "",
  montoPagar: "",
  fechaVencimiento: "",
};

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



