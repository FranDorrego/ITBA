import Link from 'next/link'
import estilosPlantilla from '@/styles/stylePlantilla.module.css'
import estilosDashboard from '@/styles/styleDashboard.module.css'
import Image from 'next/image'

export function BotonDerecho({link, text, imagen}){
    return(
        <Link href={link}>
        <button className={`${estilosDashboard.derechoBoton} ${estilosPlantilla.botonesAuxIzquierda}` } > 
            <Image className={estilosDashboard.accionesBotonesImage} src={imagen} alt="" width={20} height={20}/> 
            <h1 className={estilosDashboard.accionesBotonesLetra}>{text}</h1>  
        </button> 
        </Link>

    )
}