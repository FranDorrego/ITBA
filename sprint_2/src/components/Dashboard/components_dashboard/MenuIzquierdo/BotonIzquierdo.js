import { Link } from "react-router-dom"
import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'

export function BotonIzquierdo({text, alt, imagen, isActive, link, onClick, id}){
    return(
        <Link to={link}>
            <button className={`${estilosPlantilla.botones} ${isActive ? estilosPlantilla.botonSelecionado : ''}`} onClick={onClick} id={id}> 
                <img className={estilosPlantilla.botonImage} src={imagen} alt={alt} /> 
                <h1 className={estilosPlantilla.botonLetra}>{text}</h1>  
            </button> 
        </Link>
    )
}