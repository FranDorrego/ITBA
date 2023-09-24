import React, { useState, useImperativeHandle, useCallback } from "react";
import styles from "./Notificacion.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
/*
Para usarlo, se tiene que:

1- importar

import Notificacion from "@/components/Alert/Alert";
import {  } from "@/components/Alert/Alert";
import { useRef } from "react";

2- Crear una referencia dentro de un componente

const notificaRef = useRef();

3- Usar esa referencia

notificaRef.current.carga(); Los metodos estan declarados en useImperativeHandle

notificaRef.current.muestraContenido( Podes pasar una componente y lo renderiza )

Ya hay componentes pre-armados al final de la pagina 

4- Se tiene que colocar en el render 
<Notificacion ref={notificaRef}/>
*/

var ErrorBandera = false;
function Notificacion(props, ref) {
  const [contenido, setContenido] = useState(Cargando());
  const [isVisible, setVisibility] = useState(false);
  const closeAlert = useCallback(() => setVisibility(false), []); // Crea una función para cerrar el modal

  // Método que el componente padre puede llamar para finalizar la carga
  useImperativeHandle(ref, () => ({
    carga() {
      setContenido(<Cargando />);
      setVisibility(true);
    },
    muestraContenido(Contenido) {
      setContenido(Contenido);
      setVisibility(true);
    },
    finaliza() {
      setVisibility(false);
    },
  }));

  if (!isVisible) return null;

  try{ useEffect( () => {console.log("UseEffe")} ) } catch {}

  return (
    <div className={`${styles.overlay}`} onClick={() => closeAlert()}>
      <div className={`${styles.modal}`} >
        {contenido}
        <button onClick={() => closeAlert()}>X</button>
      </div>
    </div>
  );
}

export function Cargando() {
  ErrorBandera = false
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <h1>Espera un segundo...</h1>
    </div>
  );
}

export function Notifica(detalle) {
  ErrorBandera = false
  return (
    <div className={styles.modal}>
      <Image
        src={"/alert/transferenciaExitosa.svg"}
        width={80}
        height={20}
        alt="foto Problema"
      />
      <h2>{detalle}</h2>
    </div>
  );
}

export function ERROR(detalle) {
  return (
    <div className={`${styles.modal} ${styles.modalError}`}>
      <Image
        src={"/alert/transferenciaExitosa.svg"}
        width={80}
        height={20}
        alt="foto Problema"
      />
      <h2>{detalle}</h2>
    </div>
  );
}

export default React.forwardRef(Notificacion);
