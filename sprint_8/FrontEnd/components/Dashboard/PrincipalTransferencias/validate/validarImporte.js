import { getCookie } from "../../API_Datos_Personales";

export async function obtenerSaldoMasGrande(defaultValue = 2000000) {
  try {
    const response = await fetch("http://127.0.0.1:8000/cuenta", {
      method: "GET",
      headers: {
        Authorization: `Basic ${getCookie()}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json();

    // Encontrar la cuenta con el saldo más grande
    const cuentaMasGrande = data.reduce((cuentaActual, cuentaSiguiente) => {
      return cuentaSiguiente.balance > cuentaActual.balance ? cuentaSiguiente : cuentaActual;
    }, data[0]);

    return cuentaMasGrande.balance;
  } catch (error) {
    console.error("Error al obtener las cuentas de la API:", error);
    return defaultValue;
  }
}

export async function validarImporte(data) {
  // Verificar si la cadena contiene solo dígitos
  const soloDigitos = /^\d+$/.test(data);

  if (!soloDigitos) {
    return false; // La cadena contiene caracteres no numéricos
  }

  const importe = parseFloat(data);

  // Verificar si el número está dentro del rango
  return importe >= 1 && importe <= await obtenerSaldoMasGrande();
}

