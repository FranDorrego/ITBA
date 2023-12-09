import Layout from "@/components/Dashboard/Layout";
import DetalleOperacion from "@/components/Dashboard/DetalleOperacion/DetalleOperacion";
import WithAuth from "@/components/Dashboard/auth";

function NumeroComponente({data}) {
    return (
        <Layout titulo="ITBAK - Factura" descripcion="Detalle de la factura">
            <DetalleOperacion props={data}/>
            <WithAuth />
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { Numero_Factura } = context.query; // Accede a los parámetros de la ruta desde context.query
    
    try {
        const res = await fetch(`https://itbank.pythonanywhere.com/facturas/${Numero_Factura}`);
        const data = await res.json();
        return { props: { data } }; // Retorna los datos dentro del objeto props
    } catch (error) {
        console.error(error);
        return { props: { data: null } }; // Retorna data como null en caso de error
    }
}

export default NumeroComponente;