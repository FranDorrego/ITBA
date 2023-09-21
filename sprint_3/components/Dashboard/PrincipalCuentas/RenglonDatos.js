import React from 'react';

import { BotonCopiar } from './BotonCopiar.js';

export function Renglon ({ titulo, dato }){
    return (
      <div className="renglon">
        <h1 className="titulo">{titulo}</h1>
        <h1 className="titulo">{dato}</h1>
        <BotonCopiar textoACopiar={dato} />
      </div>
    );
  };
  