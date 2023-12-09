import CuentasPrincipal from "@/components/Dashboard/PrincipalCuentas/GeneralCuentas";
import Layout from "@/components/Dashboard/Layout";
import WithAuth from "@/components/Dashboard/auth";

function Cuentas() {
  return (
    <Layout titulo="ITBAK - Cuentas" descripcion="Seccion para ver cuentas">
      <WithAuth />
      <CuentasPrincipal />
    </Layout>
  );
}

export default Cuentas;
