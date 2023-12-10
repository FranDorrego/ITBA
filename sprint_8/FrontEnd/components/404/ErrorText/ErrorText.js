import Link from "next/link";

import Image from "next/image";

import styles from "@/styles/error/ErrorText.module.css"

import logo from '../assets/Logo.svg'

// Componente para el texto y el botón
function ErrorText(){
    return (
      <div className={styles.texto404}>
        <Image src={logo} alt="Logo Banco" />
        <h1 className={styles.textoH1404}>Parece que algo nos falta,<br />no encontramos lo que buscabas</h1>
        <Link href="/dashboard"><button className={styles.botones404}> Volver al inicio</button></Link>
      </div>
    );
};

export default ErrorText