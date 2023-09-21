import Link from 'next/link'
import estilosPlantilla from '@/styles/stylePlantilla.module.css'
import Image from 'next/image'

export function BotonIzquierdo({text, alt, imagen, isActive, link, onClick, id}){
    return(
        <Link href={`${link}`}>
            <button className={`${estilosPlantilla.botones} ${isActive ? estilosPlantilla.botonSelecionado : ''}`} onClick={onClick} id={id}> 
                <Image className={estilosPlantilla.botonImage} src={imagen} alt={alt} width={20} height={20}/> 
                <h1 className={estilosPlantilla.botonLetra}>{text}</h1>  
            </button> 
        </Link>
    )
}