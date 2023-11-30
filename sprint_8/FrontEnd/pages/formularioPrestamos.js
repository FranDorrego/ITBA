import { GeneralFormPrestamos } from "@/components/Dashboard/PrincipalFormPrestamos/GeneralFormPrestamos";
import Layout from "@/components/Dashboard/Layout";

function FormularioPrestamos() {
  return (
    <Layout titulo="ITBAK - Formulario de Prestamos" descripcion="Formulario para sacar un prestamo">
      <GeneralFormPrestamos />
    </Layout>
  );
}

export default FormularioPrestamos;
