import { Link } from "react-router-dom"

export function BotonDerecho({link, text, imagen}){
    return(
        <Link to={link}>
        <button className="derecho-botones"> 
            <img className="acciones-botones-image" src={imagen} alt="" /> 
            <h1 className="acciones-botones-letra">{text}</h1>  
        </button> 
        </Link>

    )
}