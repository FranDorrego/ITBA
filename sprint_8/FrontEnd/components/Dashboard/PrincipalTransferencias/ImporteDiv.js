import estilosDashboard from '@/styles/styleDashboard.module.css'
import { Saludo } from '../ContenidoPrincipal/Saludo'
import { useState, useEffect } from 'react';
import { getCookie } from '../API_Datos_Personales';
import { formateador } from '../API_Datos_Personales';

export default function ImporteDiv({ children }) {
  const [saldoMasGrande, setSaldoMasGrande] = useState(null);

  useEffect(() => {
    // Llamar a la API para obtener la lista de cuentas
    fetch("http://127.0.0.1:8000/cuenta", {
      method: "GET",
      headers: {
        Authorization: `Basic ${getCookie()}`,  // Reemplaza <tu-token> con tu token de autorización
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        // Encontrar la cuenta con el saldo más grande
        const cuentaMasGrande = data.reduce((cuentaActual, cuentaSiguiente) => {
          return cuentaSiguiente.balance > cuentaActual.balance ? cuentaSiguiente : cuentaActual;
        }, data[0]);

        setSaldoMasGrande(cuentaMasGrande.balance);
      })
      .catch(error => {
        console.error("Error al obtener las cuentas de la API:", error);
      });
  }, []); // Se ejecutará solo una vez al montar el componente

  return (
    <div className={estilosDashboard.transFormulario}>
      <Saludo texto="Importe*" />
      {children}
      <h1 className={estilosDashboard.AchicaLetra}>
        *El importe mínimo a transferir es de $ 1 y $ {formateador(saldoMasGrande) || 'cargando...'}
      </h1>
    </div>
  );
}