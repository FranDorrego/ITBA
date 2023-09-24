import React, { useState, useImperativeHandle, useCallback } from "react";
import styles from "./Alert.module.css";
import Image from "next/image";
import Link from "next/link";

/*
Para usarlo, se tiene que:

1- importar

import Alert from "@/components/Alert/Alert";
import { PagoEXITOSO, PagoRECHAZADO, ERROR } from "@/components/Alert/Alert";
import { useRef } from "react";

2- Crear una referencia dentro de un componente

const alertRef = useRef();

3- Usar esa referencia

alertRef.current.carga(); Los metodos estan declarados en useImperativeHandle

alertRef.current.muestraContenido( Podes pasar una componente y lo renderiza )

Ya hay componentes pre-armados al final de la pagina 

4- Se tiene que colocar en el render 
<Alert ref={alertRef}
*/

var cargaBandera = false;
function Alert(props, ref) {
  const [contenido, setContenido] = useState(Cargando);
  const [isVisible, setVisibility] = useState(false);
  const closeAlert = useCallback(() => {window.location.reload(); setVisibility(false); }, []); // Crea una función para cerrar el modal

  // Método que el componente padre puede llamar para finalizar la carga
  useImperativeHandle(ref, () => ({
    carga() {
      cargaBandera = true
      setContenido(<Cargando />);
      setVisibility(true);
    },
    muestraContenido(Contenido) {
      cargaBandera=false
      setContenido(Contenido);
      setVisibility(true);
    },
    finaliza() {
      setVisibility(false);
    },
  }));

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={() => closeAlert()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} >
        <button onClick={() => closeAlert()}>X</button>
        {contenido}
        {cargaBandera ? null: (
          <Link href={"/dashboard"}>
            <h3>Ir al inicio</h3>{" "}
          </Link>
        )}
      </div>
    </div>
  );
}

export function Cargando() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <h1>Espera un segundo...</h1>
    </div>
  );
}


export function PagoRECHAZADO() {
  return (
    <div className={styles.modal}>
      <h1>¡Rechazo del pago!</h1>
      <Image
        src={"/alert/faltanFondos.svg"}
        width={200}
        height={200}
        alt="foto Problema"
      />
      <h2>
        No hay fondos suficientes en su cuenta para procesar el
        pago.
      </h2>
    </div>
  );
}

export function PagoEXITOSO(detalle) {
  return (
    <div className={styles.modal}>
      <h1>¡Pago Exitoso!</h1>
      <Image
        src={"/alert/pagoExitoso.svg"}
        width={200}
        height={200}
        alt="foto Problema"
      />
      <h2>{detalle}</h2>
      <h2>Despreocupate... Ya esta todo listo</h2>
    </div>
  );
}

export function ERROR(detalle) {
  return (
    <div className={styles.modal}>
      <h1>¡Oupss! Ocurrio un error</h1>
      <Image
        src={"/alert/faltanFondos.svg"}
        width={200}
        height={200}
        alt="foto Problema"
      />
      <h2> {detalle} </h2>
    </div>
  );
}

export default React.forwardRef(Alert);
