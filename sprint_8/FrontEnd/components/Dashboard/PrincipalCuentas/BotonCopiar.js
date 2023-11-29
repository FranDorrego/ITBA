import React, {useState} from 'react';
import copy from './assets/copy.svg'
import Style from "@/styles/cuentas/Style.module.css"
import Image from 'next/image';

export function BotonCopiar({ textoACopiar , texto = "Copiar"}) {
  const [textoBoton, setTextoBoton] = useState(texto);

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(textoACopiar)
      .then(() => {
        setTextoBoton(" Copiado!");
        setTimeout(() => {
          setTextoBoton(texto);
        }, 1500);
      })
      .catch((err) => {
        console.error('Error al copiar el texto: ', err);
      });
  };

  return (
    <div className={Style.button} onClick={copiarAlPortapapeles}>
      <Image src={copy} alt="Icono-de-copiar"/>
      <h1 className={Style.copiar}>{textoBoton}</h1>
    </div>
  );
}




