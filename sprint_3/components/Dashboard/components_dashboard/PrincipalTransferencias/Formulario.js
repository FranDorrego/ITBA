import React from 'react';
import estilosDashboard from '../../styleDashboard.module.css'
import { Saludo } from '../Principal/Saludo';
import swal from 'sweetalert'
import { useForm } from 'react-hook-form'
import { LabelErrorLogin } from '../../../Login/components_login/Generales/LabelErrorLogin';
import { validarImporte } from './validate/validarImporte';
import { EnviaTransferencia } from '../API_Datos_Personales';
// import { validarCBU } from './validate/validarCBU';

// Componente para el formulario de transferencia
export function TransFormulario (){

    const {register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data) =>{
      swal("Transferencia realizada", "Monto: " + (data.importe))
      console.log(parseFloat(data.importe)) // ESTO ES PARA QUE VEAS EL VALOR QUE TIRA 
      // EnviaTransferencia(parseFloat(data.importe)) // ACA SE LLAMA A LA FUNCION
    }

    return (
      <form action="" className={estilosDashboard.transFormulario} onSubmit={handleSubmit(onSubmit)}>
        <RadioDiv>
          <span className={estilosDashboard.transFormularioSpan}>
            <input type="radio" id="cbu" className={estilosDashboard.transFormularioRadio} name="opcion-radio" 
            {...register("cbuAliasRadio", {
              required:true
            })}
            
            />
            <label>CBU / CVU</label>
          </span>
          <span className={estilosDashboard.transFormularioSpan}>
            <input type="radio" id="alias" className={estilosDashboard.transFormularioRadio} name="opcion-radio" 
            {...register("cbuAliasRadio", {
              required:true,
            })}/>
            <label>ALIAS</label>
          </span>
        </RadioDiv>
        { errors.cbuAliasRadio?.type === 'required' &&  <LabelErrorLogin>CBU/CVU/ALIAS/ requerido</LabelErrorLogin>}

        <input placeholder="Ingrese..." id="cbu_alias" type="text" className={estilosDashboard.transInputs}
        {...register('cbuAlias', {
                    required:true,
                    // validate: validarCBU
                })}/>
        { errors.cbuAlias?.type === 'required'  && <LabelErrorLogin>CBU/CVU/ALIAS/ requerido</LabelErrorLogin> }
        {/* { errors.cbuAlias && <LabelErrorLogin>CBU/CVU no valido</LabelErrorLogin> } */}

        <ImporteDiv>
                        
          <input placeholder="Ingrese..." id="importe"  type="number" className={estilosDashboard.transInputs}
          {...register('importe', 
          {
            required:true,
            validate: validarImporte
          })}
          />
        </ImporteDiv>

        { errors.importe?.type === 'required'  && <LabelErrorLogin>Importe requerido</LabelErrorLogin> }
        { errors.importe && <LabelErrorLogin>Importe no valido</LabelErrorLogin> }
        <MotivoDiv />
        <button type="submit" className={estilosDashboard.transBotones} id="boton-transferir" >
          <h1>Transferir</h1>
        </button>
      </form>
    );
  };
  
// Componente para las opciones de radio
const RadioDiv = ({children}) => {
return (
    <div className={estilosDashboard.transFormularioRadioDiv}>
      {children}
    </div>
);
};


// Componente para el importe
const ImporteDiv = ({children}) => {
return (
    <div className={estilosDashboard.transFormulario}>
    <Saludo texto="Importe*" />
    {children}
    <h1 className={estilosDashboard.AchicaLetra}>
        *El importe mínimo a transferir es de $ 1 y el máximo es de de dos salarios mínimos vitales y
        móviles.
    </h1>
    </div>
);
};

// Componente para el motivo
const MotivoDiv = () => {
return (
    <div className={estilosDashboard.transFormulario}>
    <Saludo titulo="Motivo" />
    <select name="motivo" id="motivo" className={estilosDashboard.transInputs}>
        <option value="varios">Varios</option>
        <option value="compra">Compra</option>
        <option value="p2p">Comercio P2P</option>
        <option value="gasto">Division de gastos / Gastos grupales</option>
    </select>
    </div>
);
};