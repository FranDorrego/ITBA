import logo from "../assets-login/Logo_ITBANK.png"
import { Link } from "react-router-dom"

export function Logo(){
    return(
        <Link to="/login"> <img src={logo} alt="logo_ITBANK" className="titulo_login"/> </Link>
    )
}