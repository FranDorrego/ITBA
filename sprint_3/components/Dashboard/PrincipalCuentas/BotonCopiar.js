import React, {useState} from 'react';
import copy from './assets/copy.svg'
import Style from "./Style.module.css"
import Image from 'next/image';

export function BotonCopiar({ textoACopiar }) {
  const [textoBoton, setTextoBoton] = useState("Copiar");

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(textoACopiar)
      .then(() => {
        setTextoBoton("OK");
        setTimeout(() => {
          setTextoBoton("Copiar");
        }, 1500);
      })
      .catch((err) => {
        console.error('Error al copiar el texto: ', err);
      });
  };

  return (
    <div className={Style.button} onClick={copiarAlPortapapeles}>
      <Image src={copy} alt="Icono de copiar"/>
      <h1 className={Style.copiar}>{textoBoton}</h1>
    </div>
  );
}




