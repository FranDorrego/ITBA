import { Link } from "react-router-dom"
import estilosDashboard from '../../styleDashboard.module.css'

export function BotonDerecho({link, text, imagen}){
    return(
        <Link to={link}>
        <button className={estilosDashboard.derechoBoton}> 
            <img className={estilosDashboard.accionesBotonesImage} src={imagen} alt="" /> 
            <h1 className={estilosDashboard.accionesBotonesLetra}>{text}</h1>  
        </button> 
        </Link>

    )
}