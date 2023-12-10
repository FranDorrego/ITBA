import Layout from "@/components/Dashboard/Layout";
import TarjetaCredito from "@/components/Dashboard/PrincipalTarjetaCredito/TarjetaCredito";
import Head from "next/head";
import WithAuth from "@/components/Dashboard/auth";

function Tarjetas() {
  return (
    <Layout titulo="ITBAK - Tarjetas" descripcion="Administracion de trajetas en nuestro Home Banking">
        <TarjetaCredito />
        <WithAuth />
    </Layout>
  );
}

export default Tarjetas;
