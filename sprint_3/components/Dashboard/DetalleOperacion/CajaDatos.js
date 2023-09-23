
import Image from "next/image";
import style from "./DetalleOperacion.module.css"

export function CajaDatos({Icono, Texto, dato}){
  return(
    <div className={style.CajaDatos}>
      <Image src={Icono} width={64} height={64} alt={Icono}/>
      <h1>{Texto}</h1>
      <h2>{dato}</h2>
    </div>
  )
}

export function CajaDatosPersonales({TextoTitulo, nombre, CBU}){
  return(
    <div className={style.CajaDatosPersonales}>

      <div className={style.titulo}>
        <Image src={"/detalle-actividad/detalle.svg"} width={64} height={64} alt={"UserSilueta"}/>
        <h1 className={style.tituloText}>{TextoTitulo}</h1>
      </div>

      {TextoTitulo === "Envia Transferencia" ? <DetallesPersonales nombre={nombre} CBU={CBU}/> : null}

    </div>
  )
}

function DetallesPersonales({nombre, CBU}){
    return(
        <>
        <div className={style.titulo2}>
            <Image src={"/detalle-actividad/UserSilueta.svg"} width={64} height={64} alt={"UserSilueta"}/>
            <h1 className={style.tituloText}>{nombre}</h1>
        </div>

        <h2>{CBU}</h2>
        </>
    )
}