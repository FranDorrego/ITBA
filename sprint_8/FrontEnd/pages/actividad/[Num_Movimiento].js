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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/movimientos/${Num_Movimiento}`, {
          method: 'GET',
          headers: {
            Authorization: `Basic ${getCookie("user")}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          // Si hay un error en la respuesta, simplemente retorna el objeto original
          console.error(`Error en la solicitud: ${response.statusText}`);
          return;
        }

        const data = await response.json();

        // Actualiza el estado con los datos de la respuesta
        setUserData(data);

      } catch (error) {
        // Maneja el error pero aún así retorna el objeto original
        console.error('Error al obtener datos:', error);
      }
    };

    Num_Movimiento ?  fetchData() : null;
  }, [Num_Movimiento]);

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
