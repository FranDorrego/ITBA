import Layout from "@/components/Dashboard/Layout";
import DetalleOperacion from "@/components/Dashboard/DetalleOperacion/DetalleOperacion";
import Head from "next/head";
import WithAuth from "@/components/Dashboard/auth";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "@/components/Dashboard/API_Datos_Personales";

function NumeroComponente() {
    const [data, setData] = useState({
        "id": null,
        "monto": null,
        "hora": "null",
        "id_tipo_operacion": null,
        "motivo": "null"
    });

    const router = useRouter();
    const { Num_Compra } = router.query;
    let userCookie = getCookie('user')
    let heder ={
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${userCookie}`
        },}

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://127.0.0.1:8000/movimientos/${Num_Compra}`,heder);
                const responseData = await res.json();
                setData(responseData);
            } catch (error) {
                console.error(error);
                setData(null);
            }
        };

        if (Num_Compra) {
            fetchData();
        }
    }, [Num_Compra]);

    return (
        <Layout titulo="ITBAK - Credito" descripcion="Credito en nuestro Home Banking">
            <DetalleOperacion props={data} />
            <WithAuth />
        </Layout>
    );
}

export default NumeroComponente;