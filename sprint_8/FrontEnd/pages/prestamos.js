import { GeneralPrestamos } from "../components/Dashboard/PrincipalPrestamos/GeneralPrestamos";
import Layout from "@/components/Dashboard/Layout";
import Head from "next/head";

function Prestamos() {
  return (
    <Layout>
        <Head>
          <title>ITBANK - Prestamos</title>
        </Head>
        <GeneralPrestamos />
    </Layout>
  );
}

export default Prestamos;
