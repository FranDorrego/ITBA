import tarjetaCompleta from '../../assets/tarjeta-completa.svg'
import estilosDashboard from '../../styleDashboard.module.css'

export function Tarjeta(){
    return(
            <div>    
                <span className={estilosDashboard.tituloTarjeta}>
                    <h1>Tarjetas</h1>
                </span>
                <span className={estilosDashboard.tarjeta}> 
                    <div>
                        <img className={estilosDashboard.fondo} src={tarjetaCompleta} alt="tarjeta" />
                    </div>
                </span> 
            </div>
    )
}