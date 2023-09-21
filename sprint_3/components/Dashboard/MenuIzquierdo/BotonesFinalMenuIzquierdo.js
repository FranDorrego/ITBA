import estilosPlantilla from '@/styles/stylePlantilla.module.css'


export function BotonesFinalMenuIzquierdo({children}){
    return(
        <div className={estilosPlantilla.menuFooter}>
            {children}
        </div>
    )
}