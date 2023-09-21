import estilosPlantilla from '@/styles/stylePlantilla.module.css'


export function Buscador(){
    return(
    <div className={estilosPlantilla.membrete}>
        <div className={estilosPlantilla.buscador}>
            <img src='/search.svg' alt="buscador" /> 
            <input type="text" placeholder="Buscar" />
        </div>
    </div>

    )

}