import estilosDashboard from '@/styles/styleDashboard.module.css'


export function Movimientos({children}){
    return(
        <div className={estilosDashboard.divMovimientos}>
            {children}
         </div>
    )
}