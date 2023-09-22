import Layout from "@/components/Dashboard/Layout";
import DetalleOperacion from "@/components/Dashboard/DetalleOperacion/DetalleOperacion";

function NumeroComponente({data}) {
    return (
        <Layout>
            <DetalleOperacion props={data}/>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { Num_Movimiento } = context.query; // Accede a los parámetros de la ruta desde context.query
    
    try {
        const res = await fetch(`https://itbank.pythonanywhere.com/movimiento/${Num_Movimiento}`);
        const data = await res.json();
        console.log(data)
        return { props: { data } }; // Retorna los datos dentro del objeto props
    } catch (error) {
        console.error(error);
        return { props: { data: null } }; // Retorna data como null en caso de error
    }
}

export default NumeroComponente;
