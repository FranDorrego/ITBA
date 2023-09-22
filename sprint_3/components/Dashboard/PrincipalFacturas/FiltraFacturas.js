import { Movimientos } from "../ContenidoPrincipal/Movimientos";
import HistorialFacturas from "./historialFacturas";
import style from "./PrincipalFacturas.module.css";
import { Saludo } from "../ContenidoPrincipal/Saludo";
import { useState } from "react";

export function FiltraFacturas() {
    const [filtro, setFiltro] = useState(null);
  
    return (
      <>
        <div className={style.filtroDivBotones}>
          <Saludo texto={"Filtra:"} />
          <button
            className={filtro === false || filtro === null ? style.botonSelecionado : style.botonDivisas}
            onClick={() => setFiltro(false)}
          >
            Ya Pagadas
          </button>
          <button
            className={filtro === true || filtro === null ? style.botonSelecionado : style.botonDivisas}
            onClick={() => setFiltro(true)}
          >
            Para Pagar
          </button>
        </div>
  
        <Movimientos>
          <HistorialFacturas pago={filtro} />
        </Movimientos>
      </>
    );
  }