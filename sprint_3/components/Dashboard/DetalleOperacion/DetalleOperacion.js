import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import style from "./DetalleOperacion.module.css"
import { Buscador } from "../ContenidoPrincipal/Buscador";
import { Saludo } from "../ContenidoPrincipal/Saludo";
import { FechayNumero } from "./FechaYNumero";
import { CajaDatosPersonales, CajaDatos, CajaDatosFactura } from "./CajaDatos";
import { formateador } from "../API_Datos_Personales";

function DetalleOperacion({ props }) {
  return (
    <div className={estilosPlantilla.general}>
      <Buscador />

      <div className={style.detalles}>

        <span>
          <Saludo texto={"Detalles del movimiento"}/>
          <FechayNumero props={props}/>
        </span>

        <CajaDatos Icono={"/detalle-actividad/monedero.svg"} Texto={"Monto de "} dato={`$ ${formateador(props.monto)}`}/>
        <CajaDatos Icono={"/detalle-actividad/ok.svg"} Texto={"Estado"} dato={ props.estado }/>
        
        {
          props.cuotas_totales === undefined ?
          <CajaDatosPersonales TextoTitulo={props.motivo} nombre={props.destinatario} CBU={`CBU ${props.CBU}`} cuotaActual={""} cuotaTotal={""}/> :
          <CajaDatosFactura CuotasPagadas={props.cuotas_pagadas} CuotasTotales={props.cuotas_totales} Empresa={props.motivo} />
        }
        
        <button className={style.boton} onClick={()=>{window.history.back()} }>Volver</button>
      </div>

    </div>
  );
}

export default DetalleOperacion;

