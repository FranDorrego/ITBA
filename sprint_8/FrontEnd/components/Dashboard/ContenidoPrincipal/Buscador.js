import estilosPlantilla from '@/styles/stylePlantilla.module.css'
import Image from 'next/image'

export function Buscador(){
    return(
    <div className={estilosPlantilla.membrete}>
        <div className={estilosPlantilla.buscador}>
            <Image src='/main/search.svg' alt="buscador" width={15} height={15}/> 
            <input type="text" placeholder="Buscar" id='buscador'/>
        </div>
    </div>

    )

}