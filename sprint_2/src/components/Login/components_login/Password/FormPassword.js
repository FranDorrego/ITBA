import { Boton } from "../Generales/Boton"
import { Label } from "../Generales/Label"
import { Subtitulo } from "../Generales/Subtitulo"
import estilosLogin from '../../stylesLogin.module.css'
import { useForm } from 'react-hook-form' 
import { LabelErrorLogin } from "../Generales/LabelErrorLogin"
import { validarDni } from "../validadores"
import swal from 'sweetalert'

export function FormPassword(){

    const {register, formState: { errors }, handleSubmit, watch} = useForm();
    const onSubmit = (data) =>{
        swal("Datos validos, ", `Se enviara un mail a: ${data.email}`)
    }

    return (
            <form className={estilosLogin.formulario_login} id="form" onSubmit={handleSubmit(onSubmit)}>
                <Subtitulo>Recupero de contraseña</Subtitulo>
                <Label>📧 Email</Label>
                <input className={estilosLogin.input_login} type="email" name="email" id="email" placeholder="Ej: alguien@example.com"
                {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                })}
                
                /> 
                { errors.email?.type === 'required' && <LabelErrorLogin>Email requerido</LabelErrorLogin> }
                { errors.email?.type === 'pattern'  && <LabelErrorLogin>Email no valido</LabelErrorLogin> }

                <Label>👤 DNI</Label>
                <input className={estilosLogin.input_login} type="number" name="dni" id="dni" text="DNI" placeholder="Ej: 99999999"                
                {...register('dni',{
                    required: true,
                    validate: validarDni
                })}
                />
                { errors.dni?.type === 'required'  && <LabelErrorLogin>DNI requerido</LabelErrorLogin> }
                { errors.dni && <LabelErrorLogin>DNI no valido</LabelErrorLogin> }

                <Label>❓ Pregunta de seguridad</Label>
                <input className={estilosLogin.input_login} type="text" name="email" id="pregunta" placeholder="❓ Pregunta de seguridad  (aca iria la pregunta que ingreso la persona de la cuenta)"
                {...register('pregunta',{
                    required: true,
                })}                
                />

                { errors.pregunta?.type === 'required'  && <LabelErrorLogin>Pregunta requerido</LabelErrorLogin> }

                <Label>🔒 Contraseña</Label>
                <input className={estilosLogin.input_login} type="password" name="password1" id="password1" placeholder="**********"
                {...register('password1',{
                    required: true,
                    minLength: 8
                })}                  
                />  
                { errors.password1?.type === 'required'  && <LabelErrorLogin>Contraseña requerida</LabelErrorLogin> }
                { errors.password1?.type === 'minLength' && <LabelErrorLogin>Más de 8 caracteres</LabelErrorLogin> } 

                <Label>🔒 Confirmar la contraseña</Label>
                <input className={estilosLogin.input_login} type="password" name="password2" id="password2" placeholder="**********" 
                {...register('password2',{
                    required: true,
                    validate: (val) =>{
                        if (watch('password1') !== val) {
                            return "Your passwords do no match";
                          }
                    }
                })}      />  
                { errors.password2?.type === 'required'  && <LabelErrorLogin>Contraseña requerida</LabelErrorLogin> }
                { errors.password2  && <LabelErrorLogin>Las contraseñas no conciden</LabelErrorLogin> }
                

                <Boton value="Enviar" id="boton_password" ></Boton>
            </form>
    )
}

