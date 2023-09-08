import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'

export function ContenedorPrincipal({children}){
    return(
        <div className={estilosPlantilla.divContenedorPrincipal}>
            {children}
        </div>

    )
}