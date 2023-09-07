import { Link } from "react-router-dom"

export function LinkCompuesto({textoParrafo, textoLink, link}){
    return(
        <p className="parrafo_login">{textoParrafo} <Link to={link} className="link_login">{textoLink}</Link></p>
    )
}