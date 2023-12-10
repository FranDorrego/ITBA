import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import estilosDashboard from "@/styles/styleDashboard.module.css";
import { Buscador } from "./Buscador";
import { ContenedorPrincipal } from "./ContenedorPrincipal";
import { Saludo } from "./Saludo";
import { Movimientos } from "./Movimientos";
import { TrajetasSaludo } from "./TarjetasSaludo";
import { HistorialTarjetas } from "../PrincipalActividad/HistorialTarjetas.js";
import { useSearchParams } from "next/navigation";
import { cliente } from "../API_Datos_Personales";
import { useState, useEffect } from "react";

export function General() {
  const user = useSearchParams();
  const usuario = user.get("user");
  const [nombreUsuario, setNombreUsuario] = useState(null);

  useEffect(() => {
    const obtenerUsuario = async () => {
      const clienteData = await cliente();
      if (clienteData) {
        setNombreUsuario(clienteData.customer_name);
      }
    };

    if (!usuario) {
      obtenerUsuario();
    } else {
      setNombreUsuario(usuario);
    }
  }, [usuario]);

  return (
    <div className={estilosPlantilla.general}>
      <Buscador />
      <ContenedorPrincipal>
        <Saludo usuario={nombreUsuario} texto="Hola, " /> 
        <TrajetasSaludo />
        <h1 className={estilosDashboard.movimientosTitulo}> Ultimos movimientos {">"}{" "} </h1>
        <Movimientos>
          <HistorialTarjetas />
        </Movimientos>
      </ContenedorPrincipal>
    </div>
  );
}
