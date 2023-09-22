
import Loading from "@/components/loading";
import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import { Buscador } from "../ContenidoPrincipal/Buscador";

function DetalleOperacion({ props }) {

  if (!props) {
    return (
        <div className={estilosPlantilla.general}>
            <Buscador />
            <Loading />;
        </div>
    )}

  return (
    <div className={estilosPlantilla.general}>
      <Buscador />
      <div>
        <h1>movimiento</h1>
        <h1>{props.id}</h1>
        <h1>{props.monto}</h1>
        <h1>{props.fecha}</h1>
        <h1>{props.motivo}</h1>
      </div>
    </div>
  );
}


export default DetalleOperacion;

