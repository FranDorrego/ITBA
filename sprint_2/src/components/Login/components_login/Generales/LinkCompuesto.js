import { Link } from "react-router-dom"
import estilosLogin from '../../stylesLogin.module.css'


export function LinkCompuesto({textoParrafo, textoLink, link}){
    return(
        <p className={estilosLogin.parrafo_login}>{textoParrafo} <Link to={link} className={estilosLogin.link_login}>{textoLink}</Link></p>
    )
}