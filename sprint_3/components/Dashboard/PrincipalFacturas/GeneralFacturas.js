import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import { Buscador } from "../ContenidoPrincipal/Buscador";
import { ContenedorPrincipal } from "../ContenidoPrincipal/ContenedorPrincipal";
import { CreaFacturas } from "./CreaFacturas"
import { TableroFacturas } from "./TableroFacturas";
import { FiltraFacturas } from "./FiltraFacturas";
import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function useMyContext() {
  return useContext(MyContext);
}

export default function Facturas() {
  const [data, setData] = useState({
    estado: true,
    nombreFactura: '', // Inicializa con valores por defecto
    montoPagar: '',
    fechaVencimiento: '',
  });

  return (
    <div className={estilosPlantilla.general}>
      <Buscador />
      <ContenedorPrincipal>
        <MyContext.Provider value={{ data, setData }}>
          <TableroFacturas />
          {data.estado ? <FiltraFacturas /> : <CreaFacturas />  }
        </MyContext.Provider>
      </ContenedorPrincipal>
    </div>
  );
}


