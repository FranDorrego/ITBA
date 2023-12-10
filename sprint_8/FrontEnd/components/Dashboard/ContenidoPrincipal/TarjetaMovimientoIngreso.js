import { useRouter } from 'next/router'; // Importa useRouter
import estilosDashboard from '@/styles/styleDashboard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function TarjetaMovimientoIngreso({id, monto, fecha, motivo, link = "actividad"}){
    return(
        <Link className={estilosDashboard.movimientosTarjeta} href={`${link}/${id}`}>
            <span className={estilosDashboard.movimientoTexto}>
                <h1>${monto}</h1>
                <h2>{fecha}</h2>
            </span>     

            <h2 className={estilosDashboard.motivoTexto}>{motivo}</h2>

            <span className={estilosDashboard.motivo}>
                <h1 className={estilosDashboard.ingreso}>Ingreso</h1>
                <Image className={estilosDashboard.motivoFoto} src='/main/circle-arrow-down.svg' alt="ingreso" width={20} height={20}/>
            </span>
            
        </Link>
    )
}






