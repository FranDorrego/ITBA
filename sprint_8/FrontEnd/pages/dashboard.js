
import { General } from "../components/Dashboard/ContenidoPrincipal/General";

import Layout from "@/components/Dashboard/Layout";

import WithAuth from "@/components/Dashboard/auth";

function dashboard() {
  return (
    <Layout titulo="ITBAK - Dashboard" descripcion="pagina principal de nuestro Home Banking">
      <WithAuth />
      <General />
    </Layout>
  );
}

export default dashboard;
