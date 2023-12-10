import { useEffect, useState } from "react";
import Layout from "@/components/Dashboard/Layout";
import DetalleOperacion from "@/components/Dashboard/DetalleOperacion/DetalleOperacion";
import WithAuth from "@/components/Dashboard/auth";
import { fetcherWithHeaders, getCookie } from "@/components/Dashboard/API_Datos_Personales";
import { useRouter } from "next/router";
import useSWR from "swr";

function NumeroComponente() {
  const router = useRouter();
  const { Num_Movimiento } = router.query;
  const [userData, setUserData] = useState({
    id: null,
    monto: null,
    hora: "null",
    id_tipo_operacion: null,
    motivo: "null",
  });

  // Utiliza useSWR directamente en tu componente
  const { data, error } = useSWR(
    `http://127.0.0.1:8000/movimientos/${Num_Movimiento}`,
    (url) =>
      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Basic ${getCookie("user")}`,
          "Content-Type": "application/json",
        },
      })
  );

  // Solo realiza la carga de datos después de que el componente se haya montado en el cliente
  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

  return (
    <Layout
      titulo="ITBAK - Movimiento"
      descripcion="Detalle del movimiento realizado"
    >
      <DetalleOperacion props={userData} />
      <WithAuth />
    </Layout>
  );
}

export default NumeroComponente;
