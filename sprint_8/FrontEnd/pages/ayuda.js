
import Layout from "@/components/Dashboard/Layout";
import GeneralAyuda from "@/components/Dashboard/Ayuda/GeneralAyuda";
import WithAuth from "@/components/Dashboard/auth";

function ayuda() {
  return (
    <Layout titulo="ITBAK - Ayuda" descripcion="Seccion de ayuda para comunicarse con soporte">
        <WithAuth />
        <GeneralAyuda />
    </Layout>
  );
}

export default ayuda;