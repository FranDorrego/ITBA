import estilosPlantilla from '@/styles/stylePlantilla.module.css'
import Image from 'next/image'

export function SpanDerecho({id}){
    return(
        <span className={estilosPlantilla.user} >
            <button>
                <Image src='/menu-derecho/notifica.svg' alt="notificacion" width={30} height={30}/> 
            </button>
            <Image className={estilosPlantilla.userFoto} src='/Avatar.svg' alt="user" id={id} width={30} height={30}/>
        </span>

    )
}