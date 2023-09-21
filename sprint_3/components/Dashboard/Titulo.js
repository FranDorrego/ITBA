import Link from "next/link"
import estilosPlantilla from '@/styles/stylePlantilla.module.css'

export function Titulo(){
    return(
        <Link href="/dashboard">
        <div className={estilosPlantilla.menuArriba}>
            <button className={estilosPlantilla.menuButton}>☰</button>
            <img className={estilosPlantilla.menuLogo} src='/logo.svg' alt=""/> 
        </div>
        </Link>
    )
}