import estilosDashboard from "@/styles/styleDashboard.module.css";
import Image from "next/image";


export function ImagePagado() {
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
  