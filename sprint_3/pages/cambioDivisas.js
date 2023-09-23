import { GeneralCambioDivisa } from "@/components/Dashboard/PrincipalCambioDivisas/GeneralCambioDivisa";
import Layout from "@/components/Dashboard/Layout";

function CambioDivisas() {
  return (
    <Layout titulo="ITBAK - Cambio de Divisas" descripcion="Seccion para cambiar divisas">
      <GeneralCambioDivisa />
    </Layout>

  );
}

export default CambioDivisas;
