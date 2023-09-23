import Link from "next/link"
import estilosPlantilla from '@/styles/stylePlantilla.module.css'
import Image from "next/image"

export function Titulo(){
    return(
        <Link href="/dashboard">
        <div className={estilosPlantilla.menuArriba}>
            <button className={estilosPlantilla.menuButton}>☰</button>
            <Image className={estilosPlantilla.menuLogo} src='/logo.svg' alt="logo" width={20} height={20}/> 
        </div>
        </Link>
    )
}