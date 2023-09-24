import estilosDashboard from '@/styles/styleDashboard.module.css'
import Alert from '@/components/Alert/Alert'
import { CambioEXITOSO } from '@/components/Alert/Alert';
import { useRef } from 'react'

export function ConfirmarDivisas(){
    const alertRef = useRef();
    return(
        <span className={estilosDashboard.confirmaDivisas}>
            <h2>Al continuar acepta que el monto final puede variar debido a las regulaciones impositivas establecidas por el BCRA.</h2>
            <button  className={estilosDashboard.botonDivisas} onClick={()=> alertRef.current.muestraContenido(CambioEXITOSO())}>CONVERTIR</button> 
            <Alert ref={alertRef}/>
        </span>
    )
}