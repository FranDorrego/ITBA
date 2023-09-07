import tarjetaCompleta from '../../assets/tarjeta-completa.svg'

export function Tarjeta(){
    return(
            <div>    
                <span className="titulo-tarjeta">
                    <h1>Tarjetas</h1>
                </span>
                <span className="tarjeta"> 
                    <div className="tarjeta-image">
                        <img className="fondo" src={tarjetaCompleta} alt="tarjeta" />
                    </div>
                </span> 
            </div>
    )
}