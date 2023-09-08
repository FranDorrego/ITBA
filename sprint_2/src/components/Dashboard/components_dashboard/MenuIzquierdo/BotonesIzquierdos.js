
import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'

export function BotonesIzquierdos({children}){
    return(
        <div className={estilosPlantilla.divBotones}>
            {children}
        </div>
    )
}