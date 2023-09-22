import tarjetaCompleta from '../assets/tarjeta-completa.svg'
import estilosDashboard from '@/styles/styleDashboard.module.css'
import Image from 'next/image'

export function Tarjeta(){
    return(
    <div>    
        <span className={estilosDashboard.tituloTarjeta}>
            <h1>Tarjetas</h1>
        </span>
        <span className={estilosDashboard.tarjeta}> 
            <div>
                <Image className={estilosDashboard.fondo} src={tarjetaCompleta} alt="tarjeta" quality={5} width={200} height={130} unoptimized />
            </div>
        </span> 
    </div>
)
}