import CuentasPrincipal from "@/components/Dashboard/PrincipalCuentas/GeneralCuentas";
import Layout from "@/components/Dashboard/Layout";

function Cuentas() {
  return (
    <Layout titulo="ITBAK - Cuentas" descripcion="Seccion para ver cuentas">
      <CuentasPrincipal />
    </Layout>
  );
}

export default Cuentas;
