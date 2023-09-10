
import { useEffect, useState } from 'react';

// Es mi variable de base por si falla la llamada a la API
const HistoricoMoviminetos=[ 
    {monto : 5500, motivo : "Prestamo" ,fecha : 1631213053000 , ingreso : true}, 
    {monto : 1560, motivo : "Transferencia" ,fecha : 1631213053000 , ingreso : false},
];

const NombreBase = "Juan Villaruel"
const CBUBase = "0000065134214875642"
const CuentaBase = "CA$ 61058478692"
const BaseDatosPersonales = {"NombreBase" : NombreBase, "CBUBase" : CBUBase ,"CuentaBase" : CuentaBase }


export function Historial() {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        fetch('https://itbank.pythonanywhere.com/')
        .then(response => response.json())  // convert to plain text
        .then((data) => {
            const historialFormateado = data.historial.map((fecha) => {
                return {
                    ...fecha,
                    fecha: milisegundosADDMMAAAA(fecha.fecha)
                };
            });
            setDatos(historialFormateado);
        })
        .catch((error) => console.error('Hubo un error:', error));
    }, []); 

    return datos ? datos : HistoricoMoviminetos;
}

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

// Con esta funcion devuelvo el dinero que tiene la cuenta dentro
export function TotalDineroCuenta() {

    let registros = Historial();  // Asegúrate de que esto devuelva un array
    let total = 0.0;
    let retiros = 0.0;
    let ingresos = 0.0;

    if (registros && Array.isArray(registros)) {  // Verifica si 'registros' es un array
        registros.forEach((registro) => {
            const monto = parseFloat(registro.monto);
            if (registro.ingreso) {
                total += monto;
                ingresos += monto;  // Aquí debes sumar, no restar
            } else {
                total -= monto;
                retiros += monto;  // Aquí debes sumar, no restar
            }
        });
    }
    
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

// Devuelvo el nombre y daots del usuario
export function Nombre() {
    const [nombre, setNombre] = useState(null);
  
    useEffect(() => {
      fetch('https://itbank.pythonanywhere.com/')
        .then((response) => response.json())
        .then((data) => setNombre(data.datos))
        .catch((error) => console.error('Error:', error));
    }, []); 
  
    return nombre ? nombre : BaseDatosPersonales ;
}

// Setea El nombre en la API
export function setNombre({NuevoNombre}){

    return fetch(`https://itbank.pythonanywhere.com/setNombre/${NuevoNombre}`)
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