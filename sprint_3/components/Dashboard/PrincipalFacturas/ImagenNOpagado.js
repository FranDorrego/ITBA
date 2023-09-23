import estilosDashboard from "@/styles/styleDashboard.module.css";
import Image from "next/image";
import { BotonPagarFactura } from "./BotonPagar";

export function ImageNOPagado({ ID }) {
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
        <BotonPagarFactura ID={ID}/>
      </span>
    );
  }



