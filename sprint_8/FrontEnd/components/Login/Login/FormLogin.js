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
import { validaIngreso } from '../consultasAPI'


export function FormLogin() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const router = useRouter();
  
    const onSubmit = async (data) => {
      let cuenta = await validaIngreso(data.usuario, data.password);
  
      if (cuenta) {
        // Guardar las cookies
        document.cookie = `user=${cuenta.basicAuth}; expires=${getCookieExpiration()}; path=/`;
        
        router.push(`/dashboard?user=${cuenta.customer_name}`);
        swal("Datos válidos, ", `Bienvenido ${cuenta.customer_name}`);
      } else {
        swal("Datos no válidos");
      }
    };
  
    // Función para obtener la fecha de expiración de la cookie (1 día en este caso)
    function getCookieExpiration() {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);
      return expirationDate.toUTCString();
    }
  
    return (
      <form className={estilosLogin.formulario_login} id="form" onSubmit={handleSubmit(onSubmit)}>
        <Subtitulo>¡Te damos la bienvenida!</Subtitulo>
        <Label>👤 Usuario</Label>
        <input
          className={estilosLogin.input_login}
          type="text"
          name="username"
          id="username"
          text="username"
          placeholder="Ej: UserName123"
          {...register("usuario", {
            required: true,
            validate: validarUsuario,
          })}
        />
        {errors.usuario && <LabelErrorLogin>Usuario no válido, entre 4 y 15 caracteres</LabelErrorLogin>}
  
        <Label>🔒 Contraseña</Label>
        <input
          className={estilosLogin.input_login}
          type="password"
          name="password"
          id="password"
          placeholder="**********"
          text="Contraseña"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        />
        {errors.password && <LabelErrorLogin>Contraseña no válida, más de 8 caracteres</LabelErrorLogin>}
  
        <Boton value="Iniciar Sesión" id="boton_inicio_sesion" />
        <LinkCompuesto textoLink="Olvidé mi contraseña" link="/password" />
      </form>
    );}