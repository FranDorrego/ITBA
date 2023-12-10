import estilosDashboard from '@/styles/styleDashboard.module.css'
import Alert from '@/components/Alert/Alert'
import { CambioEXITOSO } from '@/components/Alert/Alert';
import { useRef } from 'react'
import { ERROR } from '@/components/Alert/Alert';
import { getCookie, fetcherWithHeaders } from '../API_Datos_Personales';
import useSWR from 'swr';
import { useState } from 'react';

export function ConfirmarDivisas({ data }) {
  const alertRef = useRef();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (lado) => {
    alertRef.current.carga();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/cambiomoneda/", {
        method: 'PUT',
        headers: {
          'Authorization': `Basic ${getCookie('user')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          precio: data.precio,
          pesos: data.pesos,
          dolar: data.dolar,
          compra: lado
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log(result)

      if (result.message) {
        // Mostrar mensaje de éxito
        alertRef.current.muestraContenido(CambioEXITOSO(result.message));
      } else if (result === 100) {
        // Mostrar mensaje de pago rechazado
        alertRef.current.muestraContenido(PagoRECHAZADO());
      } else if (result.error) {
        // Mostrar mensaje de error
        alertRef.current.muestraContenido(ERROR('Ocurrio un error, vuelve a intentar mas tarde.'));
      } 
      
    } catch (error) {
      console.error("Error al realizar la conversión:", error);
      alertRef.current.muestraContenido(ERROR('Si no tienes cuenta en dolares, no puedes realizar el cambio.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <span className={estilosDashboard.confirmaDivisas}>
      <h2>Al continuar acepta que el monto final puede variar debido a las regulaciones impositivas establecidas por el BCRA.</h2>
      <button className={estilosDashboard.botonDivisas} onClick={() => onSubmit(1)} disabled={loading}>
        {loading ? 'Cargando...' : 'Comprar'}
      </button>
      <button className={estilosDashboard.botonDivisas} onClick={() => onSubmit(0)} disabled={loading}>
        {loading ? 'Cargando...' : 'Vender'}
      </button>
      <Alert ref={alertRef} />
    </span>
  );
}
