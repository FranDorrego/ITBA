import estilosDashboard from '@/styles/styleDashboard.module.css'


export function ContenedorMonto(props){
    const{        
        textPrincipal,
        placeholder,

        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount,
        cambio
    } = props;

    return(
        <div className={estilosDashboard.movimientosTarjeta}>
            <span className={`${estilosDashboard.movimientoTexto} ${estilosDashboard.divisaText}`}>
                <h2>{textPrincipal}</h2>
                <input type="number" name="origen" id="origen" placeholder={placeholder} value={amount} onChange={(e) => { onChangeAmount(e); cambio(e.target.value);}}/>
            </span>
            
            <div className={estilosDashboard.divisas} onChange={onChangeCurrency}>
                <span className={estilosDashboard.motivo}>
                </span>
                <span>
                    <select className={estilosDashboard.selectDivisas} name="" id="option1" value={selectedCurrency} disabled> 
                        {currencyOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ) )}
                    </select>
                </span>
            </div>
        </div>
    )
}