import { Saludo } from "../ContenidoPrincipal/Saludo";
import style from "./PrincipalFacturas.module.css";
import { useMyContext } from "./GeneralFacturas";
import swal from "sweetalert";
import { facturas_crea } from "@/components/Dashboard/API_Datos_Personales";

export function CreaFacturas() {
  const { data, setData } = useMyContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClickGuardarFactura = async () => {
    if (!data.nombreFactura || !data.montoPagar || !data.fechaVencimiento) {
      swal("Todos los campos son obligatorios", "");
      return;
    }

    try {
      const result = await facturas_crea(data);
      if (result) {
        setData({ ...data, estado: true });
        swal("Factura creada con éxito", "");
      } else {
        swal("Ocurrió un error, vuelve a intentar", "");
      }
    } catch (error) {
      console.error("Error al crear la factura:", error);
      swal("Ocurrió un error inesperado", "");
    }
  };
  
  return (
    <div className={style.centraTodo}>
      <Datos
        tipo={"Nombre de la Factura"}
        name="nombreFactura"
        onChange={handleInputChange}
      />
      <Datos
        tipo={"Monto a Pagar"}
        type="number"
        name="montoPagar"
        onChange={handleInputChange}
      />
      <Datos
        tipo={"Fecha de Vencimiento"}
        comentario={"dd/mm/aaaa"}
        name="fechaVencimiento"
        onChange={handleInputChange}
      />
      <Saludo texto={"Apenas se crea la factura queda marcada para pagar"} />
      <button
        className={data ? style.botonDivisas : style.botonSelecionado}
        onClick={handleClickGuardarFactura}
      >
        Guarda Factura
      </button>
    </div>
  );
}

function Datos({
  tipo,
  type = "texto",
  comentario = "Ingrese...",
  name,
  onChange,
}) {
  return (
    <div className={style.pideDato}>
      <Saludo texto={tipo} />
      <input
        placeholder={comentario}
        type={type}
        className={style.transInputs}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
