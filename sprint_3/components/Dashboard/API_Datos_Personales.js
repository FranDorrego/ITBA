import { useEffect, useState } from 'react';
import useSWR from 'swr';

const ERROR_DATOS = {"NombreBase": "", "CBUBase": "", "CuentaBase": ""}
const ERROR_STATUS = {"total_dinero" : 0,"retiros_totales" : 0, "ingresos_totales" : 0}
const fetcher = (url) => fetch(url).then((res) =>res.json());

// Paso de milisigundos a fecha
function milisegundosADDMMAAAA(milisegundos) {
  const fecha = new Date(milisegundos);

  const hora = fecha.getHours().toString().padStart(2, '0'); // Obtiene la hora y lo formatea a dos dígitos
  const minuto = fecha.getMinutes().toString().padStart(2, '0'); // Obtiene el minuto y lo formatea a dos dígitos  
  const dia = fecha.getDate().toString().padStart(2, '0'); // Obtiene el día y lo formatea a dos dígitos
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 a 11, por lo que sumamos 1
  const año = fecha.getFullYear();

  return `${dia}/${mes}/${año} ${hora}:${minuto} hs`;
}

export function Historial() {
  // Devuelve el historial de la cuenta en movimientos

  const {data, error} = useSWR( 'https://itbank.pythonanywhere.com/historial' , fetcher )

  if (error){ return []}

  if (!data){ return []}

  const historialFormateado = data.map( (fecha) => { return {...fecha, fecha: milisegundosADDMMAAAA(fecha.fecha)} ; })
  
  return historialFormateado
}

function status_general_cuenta(){
  const {data, error} = useSWR( 'https://itbank.pythonanywhere.com/status' , fetcher )

  if (error){ return ERROR_STATUS}

  if (!data){ return ERROR_STATUS}

  return data
}

export function datos_personales() {
  // Devuelve los datos personales en un objeto como ERROR_DATOS (Primera cosnt declarada en esta hoja)

  const {data, error} = useSWR( 'https://itbank.pythonanywhere.com/personal' , fetcher )

  if (error){ return ERROR_DATOS}

  if (!data){ return ERROR_DATOS}

  return data
}

// Con esta funcion devuelvo el dinero que tiene la cuenta dentro
export function TotalDineroCuenta() {

    let registros = status_general_cuenta();  // Asegúrate de que esto devuelva un array
    let total = registros.total_dinero;
    let retiros = registros.retiros_totales;
    let ingresos = registros.ingresos_totales;

    // Formatear los valores con 2 decimales y formato de miles
    const formattedTotal = total.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true,
    });

    const formattedIngresos = ingresos.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true,
    });

    const formattedRetiros = retiros.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true,
    });
    
    return {"total": formattedTotal, "ingresos": formattedIngresos, "retiros": formattedRetiros};
}

// Setea El nombre en la API
export function setNombre({NuevoNombre}){

  if (NuevoNombre == ""){
    return false
  }

  return fetch(`https://itbank.pythonanywhere.com/setNombre/${NuevoNombre}`)
    .then((response) => {
      if (!response.ok) { return false; }
      return true;
    })

    .catch((error) => {
      return false;
    });

}


// Pide un prestamo, si da false es porque no se dio el pretamo
export function pidePrestamo({ Monto }) {
    const fecha = new Date().getTime();
    
    console.log(Monto)

    if (Monto == ""){
        return false
    }

    return fetch(`https://itbank.pythonanywhere.com/prestamo/${Monto}/${fecha}`)

      .then((response) => {
        if (!response.ok) {
          return false;
        }
        return response.json();
      })

      .then((data) => {
        return data.datos || false;
      })

      .catch((error) => {
        console.error('Error:', error);
        return false;
      });
  }


// Pide un prestamo, si da false es porque no se dio el pretamo
export function enviaTransferencia({Monto}) {
    const fecha = new Date().getTime();
    
    if (Monto == ""){
        return false
    }

    return fetch(`https://itbank.pythonanywhere.com/transfiere/${Monto}/${fecha}`)

      .then((response) => {
        if (!response.ok) {
          return false;
        }
        return response.json();
      })

      .then((data) => {
        return data.datos || false;
      })

      .catch((error) => {
        console.error('Error:', error);
        return false;
      });
  }