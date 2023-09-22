import estilosDashboard from '@/styles/styleDashboard.module.css'
import Image from 'next/image'
import Link from 'next/link'


export function TarjetaMovimientoRetiro({ID, monto, fecha, motivo}){
    return(
        <Link className={estilosDashboard.movimientosTarjeta} href={`actividad/${ID}`}>
            <span className={estilosDashboard.movimientoTexto}>
                <h1>${monto}</h1>
                <h2>{fecha}</h2>
            </span>

            <h2 className={estilosDashboard.motivoTexto}>{motivo}</h2>

            <span className={estilosDashboard.motivo}>
                <h1 className={estilosDashboard.retiro}>retiro</h1>
                <Image className={estilosDashboard.motivoFoto} src='/main/circle-arrow-up.svg' alt="retiro" width={20} height={20}/>
            </span>
        </Link>
    )
}