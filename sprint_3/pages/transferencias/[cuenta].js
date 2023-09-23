
import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import Style from "@/styles/cuentas/Style.module.css"

import { Buscador } from "@/components/Dashboard/ContenidoPrincipal/Buscador";
import { ContenedorPrincipal } from "@/components/Dashboard/ContenidoPrincipal/ContenedorPrincipal";
import { Saludo } from "@/components/Dashboard/ContenidoPrincipal/Saludo.js";
import Layout from "@/components/Dashboard/Layout";
import FormularioCuentas from "@/components/Dashboard/PrincipalTransferencias/FormularioCuentas";
import { Renglon } from "@/components/Dashboard/PrincipalCuentas/RenglonDatos";
import Head from "next/head";

export default function FormCuenta(props) {

    const {cuenta} = props

    return(
        <Layout>
            <Head>
                <title>ITBANK - Transferencias</title>
            </Head>
            <div className={estilosPlantilla.general}>
                <Buscador />
                <ContenedorPrincipal>
                    <Saludo texto="Se transferira a: " />
                    <div className={`${Style.tarjeta} ${Style.margin_1_px}`}>
                        <Renglon titulo="Alias" dato={cuenta.alias} />
                        <Renglon titulo="CBU" dato={cuenta.cbu} />
                        <Renglon titulo="Cuenta Nro" dato={cuenta.nro_cuenta} />
                    </div>
                    <FormularioCuentas />
                </ContenedorPrincipal>
            </div>
        </Layout>
    )
}

export async function getStaticPaths(){
    const url = "https://650cdf8647af3fd22f6804fd.mockapi.io/cuentas"
    const response = await fetch(url)
    const cuentas = await response.json();

    const paths = cuentas.map((cuenta) =>{
        return { params: 
            {
                cuenta: cuenta.id,
                alias: cuenta.alias,
                cbu: cuenta.cbu,
                nro_cuenta: cuenta.nro_cuenta
            }
        }
    })

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){

    const {params} = context
    const id = params.cuenta;

    const url = `https://650cdf8647af3fd22f6804fd.mockapi.io/cuentas/${id}`
    const response = await fetch(url)
    const result = await response.json();


    return{
        props: {
            cuenta: result
        },
        revalidate: 10
    }
}