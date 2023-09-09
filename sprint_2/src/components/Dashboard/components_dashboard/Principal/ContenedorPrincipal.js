import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'
import estilosDashboard from '../../styleDashboard.module.css'

export function ContenedorPrincipal({children}){
    return(
        <div className={`${estilosPlantilla.divContenedorPrincipal} `}>
            {children}
        </div>

    )
}