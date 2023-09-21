import Link from 'next/link'
import estilosPlantilla from '@/styles/stylePlantilla.module.css'


export function BotonIzquierdo({text, alt, imagen, isActive, link, onClick, id}){
    return(
        <Link href={`${link}`}>
            <button className={`${estilosPlantilla.botones} ${isActive ? estilosPlantilla.botonSelecionado : ''}`} onClick={onClick} id={id}> 
                <img className={estilosPlantilla.botonImage} src={imagen} alt={alt} /> 
                <h1 className={estilosPlantilla.botonLetra}>{text}</h1>  
            </button> 
        </Link>
    )
}