import Facturas from "@/components/Dashboard/PrincipalFacturas/GeneralFacturas";
import Layout from "@/components/Dashboard/Layout";

function facturas() {
  return (
    <Layout titulo="ITBAK - Facturas" descripcion="Aca se pueden observar las facturas del cliente en nuestro Home Banking">
      <Facturas/>
    </Layout>
  );
}

export default facturas;
