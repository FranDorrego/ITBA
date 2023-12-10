import Style from "@/styles/cuentas/Style.module.css"
import { Renglon } from '../PrincipalCuentas/RenglonDatos'
import Link from 'next/link'
import { Saludo } from '../ContenidoPrincipal/Saludo'
import { useEffect, useState } from 'react'
import { getCookie } from "../API_Datos_Personales"

export function CuentasTransferir() {
  const url = "http://127.0.0.1:8000/cuenta";
  const userCookie = getCookie();
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${userCookie}`,
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
    .then(data => {
      setCuentas(data);
    })
    .catch(error => {
      console.error("Error al obtener las cuentas de la API:", error);
    });
  }, []); // Se ejecutará solo una vez al montar el componente

  return (
    <div>
      <Saludo texto="Seleccione una cuenta (presionando en su tarjeta)" />
      {cuentas.map((datos) => (
        <Link href={`/transferencias/${datos.account_id}`} key={datos.account_id} className={Style.tarjeta}>
            <Renglon titulo="Nombre" dato={datos.tipo_cuenta.tipo_cuenta} />
            <Renglon titulo="DNI" dato={datos.iban} />
            <Renglon titulo="Cuenta Nro" dato={datos.account_id} />
            <Renglon titulo="Balance" dato={datos.balance} />
        </Link>
      ))}
    </div>
  );
}