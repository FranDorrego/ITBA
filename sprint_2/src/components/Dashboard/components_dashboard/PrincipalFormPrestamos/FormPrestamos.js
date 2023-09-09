import estilosDashboard from '../../styleDashboard.module.css'

export function FormPrestamos(){
    return(
        <form className={estilosDashboard.divMonto}>

            <h1>Solicitar prestamo</h1>

            <span className={estilosDashboard.cuotas}>
                <h1>Ingrese Monto</h1>
                <input type="number" placeholder="Ingrese monto a solicitar" id="monto" />
            </span>

            <span className={estilosDashboard.cuotas}>
                <h1>Selecione Cuotas</h1>
                <select name="cuotas" id="cuotas">
                    <option value="">Cuotas</option>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                </select>
            </span>
            <button  id="botonSimular">Simular</button>

        </form>
    )


}