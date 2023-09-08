import logo from "../../assets-login/Logo_ITBANK.png"
import { Link } from "react-router-dom"
import estilosLogin from '../../stylesLogin.module.css'

export function Logo(){
    return(
        <Link to="/login"> <img src={logo} alt="logo_ITBANK" className={estilosLogin.titulo_login}/> </Link>
    )
}