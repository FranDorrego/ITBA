import Style from "@/styles/cuentas/Style.module.css"
import { Renglon } from '../PrincipalCuentas/RenglonDatos'
import Link from 'next/link'
import { Saludo } from '../ContenidoPrincipal/Saludo'
import { useEffect, useState } from 'react'

export function CuentasTransferir (){

    const url = "https://650cdf8647af3fd22f6804fd.mockapi.io/cuentas"

    const [cuentas, setCuentas] = useState([]);


    useEffect(() => {
        fetch(url)
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
          <Link href={`/transferencias/${datos.id}`} className={Style.tarjeta}>
            <Renglon titulo="Alias" dato={datos.alias} />
            <Renglon titulo="CBU" dato={datos.cbu} />
            <Renglon titulo="Cuenta Nro" dato={datos.nro_cuenta} />
          </Link>
      ))}
      </div>
    );
  };

  