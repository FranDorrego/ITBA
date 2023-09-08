import estiloPlantilla from '../../../assets-globales/stylePlantilla.module.css'

export function BotonesFinalMenuIzquierdo({children}){
    return(
        <div className={estiloPlantilla.menuFooter}>
            {children}
        </div>
    )
}