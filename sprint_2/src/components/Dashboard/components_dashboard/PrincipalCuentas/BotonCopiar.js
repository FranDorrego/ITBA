import React from 'react';
import copy from './assets/copy.svg'


export function BotonCopiar(){
    return(
      <div className='button'>
        <img src={copy} />
        <h1 className="copiar">Copiar</h1>
      </div>
    )
  }