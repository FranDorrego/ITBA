import { ContenidoActividad } from "../../components/Dashboard/PrincipalActividad/ContenidoActividad";
import Layout from "@/components/Dashboard/Layout";
import Head from "next/head";

function Actividad() {
  return (
    <Layout titulo="ITBAK - Actividad" descripcion="Aca se puede observar la actividad realizada por el cliente en nuestro Home Banking">
        <ContenidoActividad />
    </Layout>
  );
}

export default Actividad;
