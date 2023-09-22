import { Movimientos } from "../ContenidoPrincipal/Movimientos";
import HistorialFacturas from "./historialFacturas";
import style from "./PrincipalFacturas.module.css";
import { Saludo } from "../ContenidoPrincipal/Saludo";
import { useState } from "react";
import { useMyContext } from "./GeneralFacturas";

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
            Para Pagar
          </button>
          <button
            className={filtro === true || filtro === null ? style.botonSelecionado : style.botonDivisas}
            onClick={() => setFiltro(true)}
          >
            Ya pagadas
          </button>
        </div>
  
        <Movimientos>
          <HistorialFacturas pago={filtro} />
        </Movimientos>
      </>
    );
  }