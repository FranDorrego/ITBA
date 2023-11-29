import estilosDashboard from '@/styles/styleDashboard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export function Tarjeta({sinTitulo = false, estilo = estilosDashboard.tarjeta}){
    return(
    <Link href={"/credito"}>    

        {
            sinTitulo ? 
            null:
            <span className={estilosDashboard.tituloTarjeta}> <h1>Tarjetas</h1> </span> 
        }   
        

        <span className={estilo}> 
            <div>
                <Image className={estilosDashboard.fondo} src="/menu-derecho/tarjeta-completa.svg" alt="tarjeta" quality={5} width={200} height={130} priority={true} />
            </div>
        </span> 

    </Link>
)
}