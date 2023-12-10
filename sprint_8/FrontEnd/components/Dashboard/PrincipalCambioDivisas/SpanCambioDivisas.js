import estilosDashboard from '@/styles/styleDashboard.module.css'


export function SpanCambioDivisas({texto}){
    return(
        <span className={estilosDashboard.confirmaDivisas}>
            <h2>{texto}</h2>
        </span>
    )
}