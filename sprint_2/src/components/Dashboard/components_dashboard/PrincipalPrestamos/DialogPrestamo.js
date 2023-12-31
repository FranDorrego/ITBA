import estilosDashboard from '../../styleDashboard.module.css'
import logoMonedas from '../../assets/Ilustracion.png'
import arrow from '../../assets/arrow-right.svg'
import { Link } from 'react-router-dom';

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
                <img src={logoMonedas} alt="monedas" className={estilosDashboard.imgMonedas} />
                <div className={estilosDashboard.dialogDivBotones}>
                    <button className={`${estilosDashboard.btnCerrar} ${estilosDashboard.btnDialog}`} type="button" onClick={cerraModal}>Cerrar</button>
                    <Link to={"/formularioPrestamos"}>
                        <button  className={`${estilosDashboard.btnDialog}`} type="button">
                            Analizar
                            <img src={arrow} alt="arrow" className="arrow" />
                        </button>
                    </Link>

                </div>
            </div>
        </dialog>  
    )
}