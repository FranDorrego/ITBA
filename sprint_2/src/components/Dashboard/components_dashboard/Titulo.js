import logo from "../../assets-globales/assets/logo.svg"
import estilosPlantilla from '../../assets-globales/stylePlantilla.module.css'

export function Titulo(){
    return(
        <a href="../Dashboard/index.html">
        <div className={estilosPlantilla.menuArriba}>
            <button className={estilosPlantilla.menuButton}>☰</button>
            <img className={estilosPlantilla.menuLogo} src={logo} alt=""/> 
        </div>
        </a>
    )
}