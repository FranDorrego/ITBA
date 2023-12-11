import style from "./TarjetaCredito.module.css"
import { useEffect, useState } from "react";
import { getCookie } from "../API_Datos_Personales";

export function TableroResumen() {
    const [creditoDatos, setCreditoDatos] = useState(null);
  
    useEffect(() => {
      const obtenerCreditoDatos = async () => {
        const userCookie = getCookie('user'); // Obtén la cookie llamada 'user'
  
        try {
          const res = await fetch("http://127.0.0.1:8000/creditodatos", {
            method: "GET",
            headers: {
              'Authorization': `Basic ${userCookie}`,
              'Content-Type': 'application/json',
            },
          });
  
          const datos = await res.json();
          setCreditoDatos(datos);
        } catch (error) {
          console.error(error);
          // Manejar errores según sea necesario
        }
      };
  
      obtenerCreditoDatos();
    }, []); // El segundo argumento vacío [] asegura que useEffect se ejecute solo después del montaje inicial
  
    const props = creditoDatos ? {
      numero: creditoDatos.numero,
      cvv: creditoDatos.cvv,
      fecha_exipracion: creditoDatos.fecha_exipracion,
      marca: creditoDatos.marca_tarjeta.marca_tarjeta,
    } : {};
  
    return (
      <div className={style.resumenDatos}>
        <span> <h1>Numero: </h1> <h2> {props.numero} </h2> </span>
        <span> <h1>CVV: </h1> <h2> {props.cvv} </h2> </span>
        <span> <h1>Fecha de Vencimiento: </h1> <h2> {props.fecha_exipracion} </h2> </span>
        <span> <h1>Marca: </h1> <h2> {props.marca} </h2> </span>
      </div>
    );
  }