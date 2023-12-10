import Facturas from "@/components/Dashboard/PrincipalFacturas/GeneralFacturas";
import Layout from "@/components/Dashboard/Layout";
import WithAuth from "@/components/Dashboard/auth";

function facturas() {
  return (
    <Layout titulo="ITBAK - Facturas" descripcion="Aca se pueden observar las facturas del cliente en nuestro Home Banking">
      <Facturas/>
      <WithAuth />
    </Layout>
  );
}

export default facturas;
