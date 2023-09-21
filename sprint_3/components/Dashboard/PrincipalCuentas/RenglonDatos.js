import React from 'react';
import Style from "@/styles/cuentas/Style.module.css"
import { BotonCopiar } from './BotonCopiar.js';

export function Renglon ({ titulo, dato }){
    return (
      <div className={Style.renglon}>
        <h1 className={Style.titulo}>{titulo}</h1>
        <h1 className={Style.titulo}>{dato}</h1>
        <BotonCopiar textoACopiar={dato} />
      </div>
    );
  };
  