import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import { Buscador } from "../ContenidoPrincipal/Buscador";
import { ContenedorPrincipal } from "../ContenidoPrincipal/ContenedorPrincipal";
import { CreaFacturas } from "./CreaFacturas";
import { TableroFacturas } from "./TableroFacturas";
import { createContext, useContext, useState } from "react";

import { Movimientos } from "../ContenidoPrincipal/Movimientos";
import HistorialFacturas from "./historialFacturas";
import styles from "./PrincipalFacturas.module.css";

const MyContext = createContext();

export function useMyContext() {
  return useContext(MyContext);
}

export default function Facturas() {
  const [data, setData] = useState({
    filtro: null,
    estado: true,
    nombreFactura: "",
    montoPagar: "",
    fechaVencimiento: "",
  });

  return (
    <div className={estilosPlantilla.general}>
      <Buscador />

      <ContenedorPrincipal>
        <MyContext.Provider value={{ data, setData }}>
          <TableroFacturas />
          
          {
            data.estado ?
            <>
              <Resumenes titulo={"Próximos vencimientos"} pagados={false}/>
              <Resumenes titulo={"Historial"} pagados={true}/>
            </>:
            <CreaFacturas/>
          }

        </MyContext.Provider >
      </ContenedorPrincipal>
    </div>
  );
}

function Resumenes(props) {
  return (
    <div className={styles.formatoHistorial}>
      <h1 className={styles.tituloHistorial}> {props.titulo} </h1>

      <Movimientos>
        <HistorialFacturas pago={props.pagados} />
      </Movimientos>
    </div>
  );
}
