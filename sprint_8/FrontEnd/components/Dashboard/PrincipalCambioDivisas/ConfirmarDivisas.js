import estilosDashboard from '@/styles/styleDashboard.module.css'
import Alert from '@/components/Alert/Alert'
import { CambioEXITOSO } from '@/components/Alert/Alert';
import { useRef } from 'react'
import { ERROR } from '@/components/Alert/Alert';
import { CambioMoneda } from '../API_Datos_Personales';

export function ConfirmarDivisas({ data }) {
    const alertRef = useRef();
    console.log(data)
    const onSubmit = async () => {
      alertRef.current.carga();
      try {
        console.log(data)
        const transferenciaResultado = await CambioMoneda({
          precio: data.fromCurrency,
          pesos: data.exchangeRate,
          dolar: data.toCurrency
        });
  
        if (transferenciaResultado === 100) {
          alertRef.current.muestraContenido(PagoRECHAZADO());
        } else if (transferenciaResultado === true) {
          alertRef.current.muestraContenido(CambioEXITOSO(data));
        } else {
          alertRef.current.muestraContenido(ERROR());
        }
      } catch (error) {
        console.error("Error al realizar la conversion:", error);
        alertRef.current.muestraContenido(ERROR());
      }
    };
  
    return (
      <span className={estilosDashboard.confirmaDivisas}>
        <h2>Al continuar acepta que el monto final puede variar debido a las regulaciones impositivas establecidas por el BCRA.</h2>
        <button className={estilosDashboard.botonDivisas} onClick={onSubmit}>CONVERTIR</button>
        <Alert ref={alertRef} />
      </span>
    );
  }