import useSWR from "swr";

const ERROR_DATOS = [{ account_id: "", balance: "", tipo_cuenta: {"tipo_cuenta":""} }];
const ERROR_STATUS = {
  total: 0,
  ingresos: 0,
  retiros: 0,
};
const ERROR_CREDITO = { saldo: 0, gasto_mensual: 0, fecha_cierre: 0 };

const fetcher = (url) => fetch(url).then((res) => res.json());

// Paso de milisigundos a fecha
export function milisegundosADDMMAAAA(milisegundos, sinHora = false) {
  //La base de datos retorna una lista con el milisgundo dentro, por eso este IF
  if (Array.isArray(milisegundos)) {
    milisegundos = milisegundos[0];
  }

  const fecha = new Date(milisegundos);

  const hora = fecha.getHours().toString().padStart(2, "0"); // Obtiene la hora y lo formatea a dos dígitos
  const minuto = fecha.getMinutes().toString().padStart(2, "0"); // Obtiene el minuto y lo formatea a dos dígitos
  const dia = fecha.getDate().toString().padStart(2, "0"); // Obtiene el día y lo formatea a dos dígitos
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Los meses van de 0 a 11, por lo que sumamos 1
  const año = fecha.getFullYear();

  if (dia !== "NaN") {
    return sinHora
      ? `${dia}-${mes}-${año}`
      : `${dia}/${mes}/${año} ${hora}:${minuto} hs`;
  } else {
    return milisegundos;
  }
}
// formateardor de miles
export function formateador(numero) {
  try {
    const num = numero.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      useGrouping: true,
    });
    return num;
  } catch {
    return numero;
  }
}

// Traigo las cookes
export function getCookie(name) {
  let user = 0;
  let password = 0;

  // Verifica si estamos en el lado del cliente antes de acceder a document
  if (typeof window !== 'undefined') {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');

    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === 'user') {
        user = decodeURIComponent(cookieValue);
      }
      if (cookieName === 'password') {
        password = decodeURIComponent(cookieValue);
      }
    }
    
    return btoa(`${user}:${password}`)
  }

  return null;
}

// Para hacer las consultas mas simples usa este metodo con USEswl
export const fetcherWithHeaders = async (url, headers) => {
  const response = await fetch(url, {
    headers: headers,
  });

  if (!response.ok) {
    throw new Error('Error al cargar los datos');
  }

  return response.json();
};

export async function cliente() {
  // Obtener la cookie del navegador
  const userCookie = getCookie("user");

  // Verificar si se encontró la cookie
  if (userCookie) {
    // Devuelve la información del cliente
    const apiUrl = "http://127.0.0.1:8000/cliente/";

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Basic ${userCookie}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        let data = await response.json();
        data = data[0];
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error durante la solicitud:", error);
      return null;
    }
  } else {
    console.error("La cookie del usuario no se encontró");
    return null;
  }
}

export function Historial() {
  // Devuelve el historial de la cuenta en movimientos
  let userCookie = getCookie('user')
  let heder = {
    Authorization: `Basic ${userCookie}`,
    "Content-Type": "application/json",
  }

  const { data, error } = useSWR(
    "http://127.0.0.1:8000/movimientos/",
    (url) => fetcherWithHeaders(url, heder)
  );

  if (error) {
    return [];
  }

  if (!data) {
    return [];
  }

  const historialFormateadoMiles = data.map((monto) => {
    return { ...monto, monto: formateador(monto.monto) };
  });

  return historialFormateadoMiles;
}

export function infoComprobante(id) {
  // Devuelve el historial de la cuenta en movimientos
  let userCookie = getCookie('user');
  let header = {
    Authorization: `Basic ${userCookie}`,
    "Content-Type": "application/json",
  };

  // Utiliza el hook useSWR en el componente
  const { data, error } = useSWR(
    `http://127.0.0.1:8000/movimientos/${id}`,
    (url) => fetcherWithHeaders(url, header)
  );

  // No devuelvas directamente los datos aquí
  return { data, error };
}


function Status_general_cuenta() {
  const userCookie = getCookie('user'); // Obtén la cookie llamada 'user'

  const { data, error } = useSWR(
    "http://127.0.0.1:8000/status/",
    (url) =>
      fetch(url, {
        method: "GET",
        headers: {
          'Authorization': `Basic ${userCookie}`,
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
  );

  if (error) {
    return ERROR_STATUS;
  }

  if (!data) {
    return ERROR_STATUS;
  }

  return data;
}

export function Datos_personales() {
  // Devuelve los datos personales en un objeto como ERROR_DATOS (Primera cosnt declarada en esta hoja)

  let userCookie = getCookie('user');
  let header = {
    Authorization: `Basic ${userCookie}`,
    "Content-Type": "application/json",
  };

  const { data, error } = useSWR(
    "http://127.0.0.1:8000/cuenta",
    (url) => fetcherWithHeaders(url, header)
  );

  if (error) {
    return ERROR_DATOS;
  }

  if (!data) {
    return ERROR_DATOS;
  }

  return data;
}

export function Datos_tarjeta_credito() {
  // Devuelve los datos personales en un objeto como ERROR_DATOS (Primera cosnt declarada en esta hoja)

  const { data, error } = useSWR(
    "https://itbank.pythonanywhere.com/credito",
    fetcher
  );

  if (error) {
    return ERROR_CREDITO;
  }

  if (!data) {
    return ERROR_CREDITO;
  }

  const fecha_cierre = milisegundosADDMMAAAA(data.fecha_cierre);

  return {
    saldo: formateador(data.saldo),
    gasto_mensual: formateador(data.gasto_mensual),
    fecha_cierre: fecha_cierre,
  };
}

export function Facturas() {
  // Devuelve el historial de la cuenta en movimientos

  const { data, error } = useSWR(
    "https://itbank.pythonanywhere.com/facturas",
    fetcher
  );

  if (error) {
    return [];
  }

  if (!data) {
    return [];
  }

  const historialFormateado = data.map((fecha) => {
    return { ...fecha, fecha: milisegundosADDMMAAAA(fecha.fecha, true) };
  });
  const historialFormateadoMiles = historialFormateado.map((monto) => {
    return { ...monto, monto: formateador(monto.monto) };
  });

  return historialFormateadoMiles;
}

export async function facturas_crea({
  nombreFactura,
  montoPagar,
  fechaVencimiento,
}) {
  return fetch(
    `https://itbank.pythonanywhere.com/creafacturas/${nombreFactura}/${montoPagar}/${fechaVencimiento}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al realizar la solicitud");
      }
      return response.json();
    })
    .catch((error) => {
      return { error: "Ocurrió un error al procesar la solicitud" };
    });
}

export async function facturas_marcaPagada(props) {
  let link = `https://itbank.pythonanywhere.com/pagafacturas/${props.ID}`;
  if (props.cuota) {
    link = `https://itbank.pythonanywhere.com/pagacuota/${props.ID}`;
  }

  console.log(props);
  console.log(link);
  return fetch(link)
    .then((response) => {
      if (!response.ok) {
        return false;
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return false;
    });
}

// Con esta funcion devuelvo el dinero que tiene la cuenta dentro
export function TotalDineroCuenta() {
  let registros = Status_general_cuenta(); // Asegúrate de que esto devuelva un array
  let total = registros.total;
  let retiros = registros.retiros;
  let ingresos = registros.ingresos;

  // Formatear los valores con 2 decimales y formato de miles
  const formattedTotal = formateador(total);

  const formattedIngresos = formateador(ingresos);

  const formattedRetiros = formateador(retiros);

  return {
    total: formattedTotal,
    ingresos: formattedIngresos,
    retiros: formattedRetiros,
  };
}

// Setea El nombre en la API
export function setNombre({ NuevoNombre }) {
  if (NuevoNombre == "") {
    return false;
  }

  return fetch(`https://itbank.pythonanywhere.com/setNombre/${NuevoNombre}`)
    .then((response) => {
      if (!response.ok) {
        return false;
      }
      return true;
    })

    .catch((error) => {
      return false;
    });
}

// Pide un prestamo, si da false es porque no se dio el pretamo
export async function  pidePrestamo( cantidad ) {

  console.log(cantidad);

  if (!cantidad) {
    return false;
  }

  const userCookie = getCookie("user");

  return await fetch(`http://127.0.0.1:8000/aceptaprestamos/`, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${userCookie}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'monto' : cantidad }),
  })
    .then((response) => {
      if (!response.ok) {
        return false;
      }
      return true;
    })
    .catch((error) => {
      console.error('Error:', error);
      return false;
    });
}

// Pide un prestamo, si da false es porque no se dio el pretamo
export async function enviaTransferencia({ Monto, destinatario }) {
  const url = "http://127.0.0.1:8000/realizatransferencia/";
  const fecha = new Date().getTime();

  if (Monto === "") {
    return { error: "Monto no válido" };
  }

  const basicAuth = getCookie(); 

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${basicAuth}`
      },
      body: JSON.stringify({
        iban: destinatario,
        cantidad: Monto
      })
    });

    if (!response.ok) {
      return { error: "Error en la solicitud" };
    }

    const result = await response.json();

    if (result.message) {
      return { message: result.message };
    } else if (result.error) {
      return { error: result.error };
    } else {
      return { error: "Error desconocido" };
    }
  } catch (error) {
    console.error("Error:", error);
    return { error: "Error en la solicitud" };
  }
}




// Realiza el cambio de moneda 
export  function CambioMoneda({precio, pesos, dolar}) {
  // Devuelve el historial de la cuenta en movimientos
  let userCookie = getCookie('user')
  let heder = {
    Authorization: `Basic ${userCookie}`,
    "Content-Type": "application/json",
    'precio' : precio,
    'pesos': pesos,
    'dolar': dolar
  }
  console.log(
    {'precio' : precio,
    'pesos': pesos,
    'dolar': dolar}
  )

  const { data: movimientosData, error } = useSWR(
    "http://127.0.0.1:8000/cambiomoneda/",
    (url) => fetcherWithHeaders(url, heder)
  );
  
  if (error) {
    return false;
  }

  if (!movimientosData) {
    return [];
  }

  return movimientosData;
}
