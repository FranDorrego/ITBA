import estilosDashboard from '@/styles/styleDashboard.module.css'
import logoMonedas from '../assets/Ilustracion.png'
import arrow from '../assets/arrow-right.svg'
import Link from 'next/link';
import Image from 'next/image';

export function DialogPrestamo(){

    function cerraModal(){
        const modal = document.getElementById('dialogPrestamos');
        modal.close();
    }

    return(
        <dialog className={estilosDashboard.dialog} id='dialogPrestamos'>
            <div className={estilosDashboard.dialogDiv}>
                <h1 className={estilosDashboard.saludoDialog}>Bienvenido a préstamos</h1>
                <p className={estilosDashboard.movimientosTituloDialog}>Analizá tu línea crediticia para acceder a un préstamo inmediato</p>
                <Image src={logoMonedas} alt="monedas" className={estilosDashboard.imgMonedas} />
                <div className={estilosDashboard.dialogDivBotones}>
                    <button className={`${estilosDashboard.btnCerrar} ${estilosDashboard.btnDialog}`} type="button" onClick={cerraModal}>Cerrar</button>
                    <Link href={"/formularioPrestamos"}>
                        <button  className={`${estilosDashboard.btnDialog}`} type="button">
                            Analizar
                            <Image src={arrow} alt="arrow" className="arrow" />
                        </button>
                    </Link>

                </div>
            </div>
        </dialog>  
    )
}