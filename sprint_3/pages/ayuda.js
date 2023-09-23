
import Layout from "@/components/Dashboard/Layout";
import GeneralAyuda from "@/components/Dashboard/Ayuda/GeneralAyuda";
function ayuda() {
  return (
    <Layout titulo="ITBAK - Ayuda" descripcion="Seccion de ayuda para comunicarse con soporte">
        <GeneralAyuda />
    </Layout>
  );
}

export default ayuda;