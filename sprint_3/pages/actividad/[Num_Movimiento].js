import Layout from "@/components/Dashboard/Layout";
import DetalleOperacion from "@/components/Dashboard/DetalleOperacion/DetalleOperacion";
import { milisegundosADDMMAAAA} from "@/components/Dashboard/API_Datos_Personales";
import Head from "next/head";

function NumeroComponente({data}) {
    return (
        <Layout titulo="ITBAK - Movimiento" descripcion="Detalle del movimiento realizado">
            <DetalleOperacion props={data}/>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { Num_Movimiento } = context.query; // Accede a los parámetros de la ruta desde context.query
    
    try {
        const res = await fetch(`https://itbank.pythonanywhere.com/movimiento/${Num_Movimiento}`);
        let data = await res.json();
        data.fecha = milisegundosADDMMAAAA(data.fecha)
        return { props: { data } }; // Retorna los datos dentro del objeto props
    } catch (error) {
        console.error(error);
        return { props: { data: null } }; // Retorna data como null en caso de error
    }
}

export default NumeroComponente;
