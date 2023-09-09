import estilosDashbaord from '../../styleDashboard.module.css'
import arg from '../../assets/ARS.png'

export function ContenedorMonto({textPrincipal, placeholder, banderaDefault}){
    return(
        <div className={estilosDashbaord.movimientosTarjeta}>
            <span className={`${estilosDashbaord.movimientoTexto} ${estilosDashbaord.divisaText}`}>
                <h2>{textPrincipal}</h2>
                <input type="number" name="origen" id="origen" placeholder={placeholder} />
            </span>
            
            <div className={estilosDashbaord.divisas}>
                <span className={estilosDashbaord.motivo}>
                    <img src={banderaDefault} alt={banderaDefault} width="75px" id="imagen1" />
                </span>
                <span>
                    <select name="" id="option1"> 
                        <option value="arg" id="arg">ARS</option>
                        <option value="usa" id="usd">USD</option>
                        <option value="euro" id="euro">EUR</option>
                        <option value="br" id="br">BRL</option>
                        <option value="gb" id="gb">GBP</option>
                        <option value="yuan" id="yuan">CNY</option>
                    </select>
                </span>
            </div>
        </div>
    )
}