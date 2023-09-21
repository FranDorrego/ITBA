import estilosDashboard from '@/styles/styleDashboard.module.css'
import Image from 'next/image'

export function TarjetaMovimientoIngreso({monto, fecha, motivo}){
    return(
        <div className={estilosDashboard.movimientosTarjeta}>
            <span className={estilosDashboard.movimientoTexto}>
                <h1>${monto}</h1>
                <h2>{fecha}</h2>
            </span>     

            <h2 className={estilosDashboard.motivoTexto}>{motivo}</h2>

            <span className={estilosDashboard.motivo}>
                <h1 className={estilosDashboard.ingreso}>Ingreso</h1>
                <Image className={estilosDashboard.motivoFoto} src='/circle-arrow-down.svg' alt="ingreso" width={20} height={20}/>
            </span>
            
        </div>
    )
}