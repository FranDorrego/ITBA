import { Link } from "react-router-dom"

export function BotonIzquierdo({text, alt, imagen, customClass, link}){
    return(
        <Link to={link}>
            <button className={`botones ${customClass}`}> 
                <img className="boton-image" src={imagen} alt={alt} /> 
                <h1 className="boton-letra">{text}</h1>  
            </button> 
        </Link>
    )
}