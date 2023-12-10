import { GeneralPrestamos } from "../components/Dashboard/PrincipalPrestamos/GeneralPrestamos";
import Layout from "@/components/Dashboard/Layout";
import Head from "next/head";
import WithAuth from "@/components/Dashboard/auth";

function Prestamos() {
  return (
    <Layout>
        <WithAuth />
        <Head>
          <title>ITBANK - Prestamos</title>
        </Head>
        <GeneralPrestamos />
    </Layout>
  );
}

export default Prestamos;
