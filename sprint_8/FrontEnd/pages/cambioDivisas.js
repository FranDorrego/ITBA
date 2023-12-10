import { GeneralCambioDivisa } from "@/components/Dashboard/PrincipalCambioDivisas/GeneralCambioDivisa";
import Layout from "@/components/Dashboard/Layout";
import WithAuth from "@/components/Dashboard/auth";

function CambioDivisas() {
  return (
    <Layout titulo="ITBAK - Cambio de Divisas" descripcion="Seccion para cambiar divisas">
      <WithAuth />
      <GeneralCambioDivisa />
    </Layout>

  );
}

export default CambioDivisas;
