import React from 'react'
import { Link } from "react-router-dom"
import estilosPantilla from './style.module.css'
import nombre from './assets/Logo.svg'
import degrade from './assets/Degrade.svg'
import error404 from './assets/404.svg'

// Componente principal para la página 404
const Error404Page = () => {
  return (
    <div className={estilosPantilla.body404}>
      <ErrorText />
      <ErrorImage />
    </div>
  );
};

// Componente para el texto y el botón
const ErrorText = () => {
  return (
    <div className={estilosPantilla.texto404}>
      <img src={nombre} alt="" />
      <h1 className={estilosPantilla.textoH1404}>Parece que algo nos falta,<br />no encontramos lo que buscabas</h1>
      <Link to="/dashboard"><button className={estilosPantilla.botones404} >Volver al inicio</button></Link>
    </div>
  );
};

// Componente para la imagen del error 404
const ErrorImage = () => {
  return (
    <img className={estilosPantilla.foto404} src={error404} alt="404 Error" />
  );
};

export default Error404Page;
