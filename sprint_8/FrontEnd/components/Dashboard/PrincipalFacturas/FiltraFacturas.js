import { Movimientos } from "../ContenidoPrincipal/Movimientos";
import HistorialFacturas from "./historialFacturas";
import style from "./PrincipalFacturas.module.css";
import { Saludo } from "../ContenidoPrincipal/Saludo";
import { useState } from "react";
import { useMyContext } from "./GeneralFacturas";

export function FiltraFacturas() {
    const { data, setData } = useMyContext();

    return (
      <>
        <div className={style.filtroDivBotones}>
          <Saludo texto={"Filtra:"} />
          <button
            className={data.filtro === false || data.filtro === null ? style.botonSelecionado : style.botonDivisas}
            onClick={() => setData({ ...data, filtro: false })}
          >
            Para Pagar
          </button>
          <button
            className={data.filtro === true || data.filtro === null ? style.botonSelecionado : style.botonDivisas}
            onClick={() => setData({ ...data, filtro: true })}
          >
            Ya pagadas
          </button>
        </div>
  
        <Movimientos>
          <HistorialFacturas pago={data.filtro} />
        </Movimientos>
      </>
    );
  }