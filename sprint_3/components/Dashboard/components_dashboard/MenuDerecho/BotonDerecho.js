import Link from 'next/link'
import estilosPlantilla from '@/styles/stylePlantilla.module.css'
import estilosDashboard from '@/styles/styleDashboard.module.css'

export function BotonDerecho({link, text, imagen}){
    return(
        <Link href={link}>
        <button className={`${estilosDashboard.derechoBoton} ${estilosPlantilla.botonesAuxIzquierda}` } > 
            <img className={estilosDashboard.accionesBotonesImage} src={imagen} alt="" /> 
            <h1 className={estilosDashboard.accionesBotonesLetra}>{text}</h1>  
        </button> 
        </Link>

    )
}