
import { useEffect, useState } from 'react';

// Es mi variable de base por si falla la llamada a la API
const DatosApi=[ {monto : 150, fecha : 123456 , ingreso : true}, {monto : 150, fecha : 123456 , ingreso : false} ];
const NombreBase = "Juan"

// Con esta funcion actualizo los datos de los pedidos
export function Historial() {
    const [datos, setDatos] = useState(null);
  
    useEffect(() => {
      fetch('https://api.example.com/items')
        .then((response) => response.json())
        .then((data) => setDatos(data))
        .catch((error) => console.error('Error:', error));
    }, DatosApi); 
  
    return DatosApi ;
}

// Con esta funcion devuelvo el dinero que tiene la cuenta dentro
export function TotalDineroCuenta() {

    let registros = Historial();  // Asegúrate de que esto devuelva un array
    let total = 0;
    let retiros = 0;
    let ingresos = 0;

    if (registros && Array.isArray(registros)) {  // Verifica si 'registros' es un array
        registros.forEach((registro) => {
            if (registro.ingreso) {
                total += registro.monto;
                ingresos += registro.monto;  // Aquí debes sumar, no restar
            } else {
                total -= registro.monto;
                retiros += registro.monto;  // Aquí debes sumar, no restar
            }
        });
    }
    
    return {"total": total, "ingresos": ingresos, "retiros": retiros};
}

// Devuelvo el nombre del usuario
export function Nombre() {
    const [nombre, setNombre] = useState(null);
  
    useEffect(() => {
      fetch('https://api.example.com/items')
        .then((response) => response.json())
        .then((data) => setNombre(data))
        .catch((error) => console.error('Error:', error));
    }, NombreBase); 
  
    return NombreBase ;
}