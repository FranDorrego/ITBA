import ContenedorPrincipal from "../components/Dashboard/PrincipalTransferencias/GeneralTransferencias";
import Layout from "@/components/Dashboard/Layout";
import WithAuth from "@/components/Dashboard/auth";

function Transferencias() {
  return (
    <Layout titulo="ITBAK - Transferencias" descripcion="Seccion para realizar transferencias">
      <WithAuth />
      <ContenedorPrincipal />
    </Layout>

  );
}

export default Transferencias;
