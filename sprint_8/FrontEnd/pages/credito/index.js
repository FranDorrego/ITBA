import Layout from "@/components/Dashboard/Layout";
import TarjetaCredito from "@/components/Dashboard/PrincipalTarjetaCredito/TarjetaCredito";
import Head from "next/head";

function Tarjetas() {
  return (
    <Layout titulo="ITBAK - Tarjetas" descripcion="Administracion de trajetas en nuestro Home Banking">
        <TarjetaCredito />
    </Layout>
  );
}

export default Tarjetas;
