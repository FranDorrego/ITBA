import React from 'react';
import Style from "@/styles/cuentas/Style.module.css"
import { BotonCopiar } from './BotonCopiar.js';

function capitalizeFirstLetter(string) {
  if (typeof string === 'string' || string instanceof String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return string;
}

export function Renglon ({ titulo, dato }){
    return (
      <div className={Style.renglon}>
        <h1 className={Style.titulo}>{capitalizeFirstLetter(titulo)}</h1>
        <h1 className={Style.titulo}>{capitalizeFirstLetter(dato)}</h1>
        <BotonCopiar textoACopiar={capitalizeFirstLetter(dato)} />
      </div>
    );
  };
  