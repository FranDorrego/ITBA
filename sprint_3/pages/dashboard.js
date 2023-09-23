
import { General } from "../components/Dashboard/ContenidoPrincipal/General";

import Layout from "@/components/Dashboard/Layout";

function dashboard() {
  return (
    <Layout titulo="ITBAK - Dashboard" descripcion="pagina principal de nuestro Home Banking">
      <General />
    </Layout>
  );
}

export default dashboard;
