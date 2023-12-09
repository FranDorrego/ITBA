import { GeneralFormPrestamos } from "@/components/Dashboard/PrincipalFormPrestamos/GeneralFormPrestamos";
import Layout from "@/components/Dashboard/Layout";
import WithAuth from "@/components/Dashboard/auth";

function FormularioPrestamos() {
  return (
    <Layout titulo="ITBAK - Formulario de Prestamos" descripcion="Formulario para sacar un prestamo">
      <WithAuth />
      <GeneralFormPrestamos />
    </Layout>
  );
}

export default FormularioPrestamos;
