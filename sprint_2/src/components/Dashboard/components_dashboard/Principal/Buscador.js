import search from '../../../assets-globales/assets/search.svg'
import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'

export function Buscador(){
    return(
    <div className={estilosPlantilla.membrete}>
        <div className={estilosPlantilla.buscador}>
            <img src={search} alt="buscador" /> 
            <input type="text" placeholder="Buscar" />
        </div>
    </div>

    )

}