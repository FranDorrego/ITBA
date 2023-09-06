import { FormLogin } from "./FormLogin"
import { Logo } from "./Logo"
import { Link } from "./Link"
export function Contenido({children}){
    return(
        <div className="grid">
            <div className="contenido">
                {children}
            </div>
        </div>
    )
}
