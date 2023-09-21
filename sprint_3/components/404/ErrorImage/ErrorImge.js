import style from "./ErrorImage.module.css"

import fotoError from '../assets/404.svg'

import Image from "next/image";

// Componente para la imagen del error 404
function ErrorImage(){
    return (
      <Image className={style.foto404} src={fotoError} alt="404 Error" />
    );
  };

export default ErrorImage