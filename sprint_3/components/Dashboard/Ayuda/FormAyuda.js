import React from 'react'
import estilosDashboard from '@/styles/styleDashboard.module.css'
import swal from 'sweetalert'
import { useForm } from 'react-hook-form'
import { LabelErrorLogin } from "@/components/Login/Generales/LabelErrorLogin";
import LabelAyuda from './LabelAyuda';
export default function FormAyuda() {

    
    const {register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
        swal("Consulta realizada", "Se envio la consulta a example@mail.com, \nen breve nos estaremos comunicando con usted");        
    }

    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div className={estilosDashboard.divAyuda}>
            <LabelAyuda >
            Email
            <input placeholder="Ingrese su email" id="email" type="email" className={estilosDashboard.transInputs}
            {...register('email', {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            })}
            
            /> 
            { errors.email?.type === 'required' && <LabelErrorLogin>Email requerido</LabelErrorLogin> }
            { errors.email?.type === 'pattern'  && <LabelErrorLogin>Email no valido</LabelErrorLogin> } 
            </LabelAyuda>

            <LabelAyuda >
            Número de cuenta
            <input placeholder="Ingrese su número de cuenta" id="nro_cuenta" type="text" className={`${estilosDashboard.transInputs}`}
            {...register('nro_cuenta', {
                required: true,
            })}
            
            /> 
            { errors.nro_cuenta?.type === 'required' && <LabelErrorLogin>Número de cuenta requerido</LabelErrorLogin> }
            </LabelAyuda>  
    
            <LabelAyuda> 
                Consulta
            <textarea placeholder="Ingrese su consulta" id="consulta"  type="textarea" className={estilosDashboard.transInputs}
            {...register('consulta', 
            {
                required:true,
                maxLength: 250
            })}
            />
    
            { errors.consulta && <LabelErrorLogin>Consulta no valido</LabelErrorLogin> }
            </LabelAyuda>           
            </div>
            <button type="submit" className={estilosDashboard.transBotones} id="boton-transferir" >
                <h1>Enviar</h1>
            </button>
        </form>
      );
    };
 

