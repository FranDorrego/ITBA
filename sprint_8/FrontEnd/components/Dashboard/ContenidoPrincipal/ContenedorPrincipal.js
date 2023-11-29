import estilosPlantilla from '@/styles/stylePlantilla.module.css'

export function ContenedorPrincipal({children}){
    return(
        <div className={`${estilosPlantilla.divContenedorPrincipal} `}>
            {children}
        </div>

    )
}