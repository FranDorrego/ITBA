import { Link } from "react-router-dom"
import estilosPlantilla from '../../assets-globales/stylePlantilla.module.css'

export function Titulo(){
    return(
        <Link to="/dashboard">
        <div className={estilosPlantilla.menuArriba}>
            <button className={estilosPlantilla.menuButton}>☰</button>
            <img className={estilosPlantilla.menuLogo} src="/logo.svg" alt=""/> 
        </div>
        </Link>
    )
}