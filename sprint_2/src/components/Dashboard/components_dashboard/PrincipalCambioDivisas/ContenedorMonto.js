import estilosDashbaord from '../../styleDashboard.module.css'

export function ContenedorMonto(props){
    const{        
        textPrincipal,
        placeholder,

        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props;
    return(
        <div className={estilosDashbaord.movimientosTarjeta}>
            <span className={`${estilosDashbaord.movimientoTexto} ${estilosDashbaord.divisaText}`}>
                <h2>{textPrincipal}</h2>
                <input type="number" name="origen" id="origen" placeholder={placeholder} value={amount} onChange={onChangeAmount}/>
            </span>
            
            <div className={estilosDashbaord.divisas} onChange={onChangeCurrency}>
                <span className={estilosDashbaord.motivo}>
                </span>
                <span>
                    <select name="" id="option1" value={selectedCurrency}> 
                        {currencyOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ) )}
                    </select>
                </span>
            </div>
        </div>
    )
}