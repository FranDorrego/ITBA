import { FormLogin } from "./FormLogin"
import logo from "../assets/Logo_ITBANK.png"

export function Contenido(){
    return(
        <div className="grid">
            <div className="contenido">
                <a href="/Login/login.html"> <img src={logo} alt="logo_ITBANK" className="titulo"/> </a>
                <FormLogin/>
                <p className="parrafo">¿No tiene cuenta? <a href="/Login/register.html" className="link">Crear cuenta</a></p>
            </div>
        </div>
    )
}
