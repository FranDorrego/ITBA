
import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'

export function BotonesDerechos({children}){
    return(
        <div className={estilosPlantilla.divBotones}>
            {children}
        </div>
    )

}