import style from "./PrincipalFacturas.module.css";
import estilosDashboard from "@/styles/styleDashboard.module.css";
import { Saludo } from "../ContenidoPrincipal/Saludo";
import { useMyContext } from "./GeneralFacturas";

export function TableroFacturas() {
  const { data, setData } = useMyContext();

  const handleToggleEstado = () => {
    const newData = { ...data, estado: !data.estado };
    setData(newData);
  };

  return (
    <div className={style.resumenDatos}>
      <Saludo texto={"Registra y paga aquí tus facturas >"} />
      <button
        className={data.estado ? style.botonDivisas : style.botonSelecionado}
        onClick={handleToggleEstado}
      >
        + Registra una Factura a Pagar
      </button>
    </div>
  );
}
