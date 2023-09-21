import React, {useState} from 'react';
import copy from './assets/copy.svg'


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
    <div className='button' onClick={copiarAlPortapapeles}>
      <img src={copy} alt="Icono de copiar" />
      <h1 className="copiar">{textoBoton}</h1>
    </div>
  );
}




