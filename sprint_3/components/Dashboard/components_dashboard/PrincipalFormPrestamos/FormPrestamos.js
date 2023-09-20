import estilosDashboard from '../../styleDashboard.module.css'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { LabelErrorLogin } from '../../../Login/components_login/Generales/LabelErrorLogin';
import { SimuladorPrestamo } from './SimuladorPrestamo';
import { useState } from 'react';

export function FormPrestamos(){
    const intereses = 1.15
    const {register, formState: { errors }, handleSubmit,watch} = useForm();
    const [cuotasDe, setCuotasDe] = useState('')
    const [interesesAPagar, setInteresesAPagar] = useState('')
    const [totalAPagar, setTotalAPagar] = useState('')
    const [interesAPagarEnPlata, setInteresAPagarEnPlata] = useState('')
    
    
    const onSubmit = (data) =>{
    

    setCuotasDe( data.monto / data.cuotas * intereses)
    setInteresesAPagar(data.monto * 0.15)
    setInteresAPagarEnPlata(data.monto* 0.15)
    setTotalAPagar(data.monto*intereses)
    
    }

    return(
        <>
        
        <form className={estilosDashboard.divMonto} onSubmit={handleSubmit(onSubmit)}>

            <h1>Solicitar prestamo</h1>

            <span className={estilosDashboard.cuotas}>
                <h1>Ingrese Monto</h1>
                <input type="number" placeholder="Ingrese monto a solicitar" id="monto" 
                {...register("monto",
                {
                    required: true,
                })}
                />
                {errors.monto?.type === 'required' && <LabelErrorLogin>Monto requerido</LabelErrorLogin>}
            </span>

            <span className={estilosDashboard.cuotas}>
                <h1>Selecione Cuotas</h1>
                <select name="cuotas" id="cuotas" 
                {...register("cuotas",
                {
                    required: true,
                }
                )}>
                    <option value="">Cuotas</option>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                </select>

                {errors.cuotas?.type === 'required' && <LabelErrorLogin>Selecciona la cantidad de cuotas</LabelErrorLogin>  } 

            </span>
            <button  id="botonSimular" type='submit'>Simular</button>
        </form>
        <SimuladorPrestamo interesesAPagar={interesesAPagar} cuotasDe={cuotasDe} totalAPagar = {totalAPagar} 
        porcentaje={(e, monto)=>{
            e.preventDefault();
            setInteresesAPagar( (Math.round((intereses - 1)*100)).toString() + "%") // ESTA PAVADA SOLO PARA PONER 15%, PERO UN FUTURO SE PUEDE 
                                                                                    // CAMBIAR DEPENDIENDO EL INTERES QUE APLIQUEMOS, POR AHORA SIEMPRE 15%
        }}
        plata={(e)=>{
            e.preventDefault();
            setInteresesAPagar(interesAPagarEnPlata)
        }}
        />
        </>
    )


}