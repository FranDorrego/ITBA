import { Link } from "react-router-dom"

export function LinkCompuesto({textoParrafo, textoLink, link}){
    return(
        <p className="parrafo">{textoParrafo} <Link to={link} className="link">{textoLink}</Link></p>
    )
}