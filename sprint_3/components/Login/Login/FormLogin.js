import estilosLogin from '@/styles/stylesLogin.module.css'
import { Boton } from "../Generales/Boton"
import { Label } from "../Generales/Label"
import { Subtitulo } from "../Generales/Subtitulo"
import { LinkCompuesto } from "../Generales/LinkCompuesto"
import { LabelErrorLogin } from '../Generales/LabelErrorLogin'
import { validarDni, validarUsuario } from '../validadores'
import swal from 'sweetalert'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

export function FormLogin(){
    const {register, formState: { errors }, handleSubmit} = useForm();


    const router = useRouter();
    const onSubmit = (data) =>{
        router.push(`/dashboard?user=${data.usuario}`)
        swal("Datos validos, ", `Bienvenido ${data.usuario}`)
    }

    


    return (
            <form  className={estilosLogin.formulario_login} id="form" onSubmit={handleSubmit(onSubmit)}>
                <Subtitulo>¡Te damos la bienvenida!</Subtitulo>
                <Label>👤 Usuario</Label>
                <input className={estilosLogin.input_login} type="text" name="usuario" id="usuario" text="Usuario" placeholder="Ej: UserName123"
                {...register('usuario', {
                    required:true,
                    validate: validarUsuario
                })}
                />
                { errors.usuario?.type === 'required'  && <LabelErrorLogin>Usuario requerido</LabelErrorLogin> }
                { errors.usuario && <LabelErrorLogin>Entre 4 y 15 caracteres</LabelErrorLogin> }
                <Label>👤 DNI</Label>
                <input className={estilosLogin.input_login} type="number" name="dni" id="dni" text="DNI" placeholder="Ej: 99999999" 
                {...register('dni',{
                    required: true,
                    validate: validarDni
                })}
                />
                { errors.dni?.type === 'required'  && <LabelErrorLogin>DNI requerido</LabelErrorLogin> }
                { errors.dni && <LabelErrorLogin>DNI no valido</LabelErrorLogin> }
                
                <Label>🔒 Contraseña</Label>
                <input className={estilosLogin.input_login} type="password" name="password" id="password" placeholder="**********" text="Contraseña"
                {...register('password',{
                    required: true,
                    minLength: 8
                })}
                /> 
                { errors.password?.type === 'required'  && <LabelErrorLogin>Contraseña requerida</LabelErrorLogin> }
                { errors.password?.type === 'minLength' && <LabelErrorLogin>Más de 8 caracteres</LabelErrorLogin> } 
                <Boton value="Iniciar Sesión" id="boton_inicio_sesion">

                </Boton>
                <LinkCompuesto textoLink="Olvide mi contraseña" link="/password"/>
            </form>
    )
}

