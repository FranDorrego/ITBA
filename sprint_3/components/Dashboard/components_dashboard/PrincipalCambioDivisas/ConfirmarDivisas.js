import estilosDashboard from '@/styles/styleDashboard.module.css'


export function ConfirmarDivisas(){
    return(
        <span className={estilosDashboard.confirmaDivisas}>
            <h2>Al continuar acepta que el monto final puede variar debido a las regulaciones impositivas establecidas por el BCRA.</h2>
            <button  className={estilosDashboard.botonDivisas}>CONVERTIR</button> 
        </span>
    )
}