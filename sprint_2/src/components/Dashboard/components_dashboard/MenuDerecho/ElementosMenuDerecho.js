import estilosDashboard from '../../styleDashboard.module.css'


export function ElementosMenuDercho({children}){
    return(
    <div className={estilosDashboard.menuDerechoElementos}>
        <div id={estilosDashboard.contenedorBotonesDerecho}>
            {children}
        </div>
    </div>


    )
}