
import { MenuIzquierdo } from "./MenuDerecho/MenuIzquierdo";
import { MenuDerecho } from "./MenuDerecho/MenuDerecho";
import { Footer } from "./Footer/Footer";

import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import Head from "next/head";



export default function Layout({children, titulo, descripcion}) {
    return (
        <div className={estilosPlantilla.gridDashboard}>
            <Head>
                <title>{titulo}</title>
                <meta name="description" content={descripcion} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MenuIzquierdo />
            {children}
            <MenuDerecho />
            <Footer />
        </div>
    )
  }

  Layout.defaultProps = {
    titulo: "ITBANK",
    descripcion: "Descripcion default"
 
  };