import { Boton } from "../Generales/Boton"
import { Label } from "../Generales/Label"
import { Subtitulo } from "../Generales/Subtitulo"
import { Dialog, abrirModal} from "./Dialog"
import estilosLogin from '@/styles/stylesLogin.module.css'
import { useForm } from 'react-hook-form' 
import { LabelErrorLogin } from "../Generales/LabelErrorLogin"
import swal from 'sweetalert'
import { validarUsuario, validarDni, validarTelefono } from "../validadores"




export function FormRegister(){

    
    const {register, formState: { errors }, handleSubmit, watch} = useForm();
    const onSubmit = (data) =>{
        swal("Datos validos, ", `Bienvenido: ${data.usuario}`)
    }



    return (
            <form action="" className={estilosLogin.formulario_login} id="form" onSubmit={handleSubmit(onSubmit)}>
                <Subtitulo>!Cuenta nueva!</Subtitulo>

                <Label>👤 Nombre</Label>
                <input className={estilosLogin.input_login} type="text" name="nombre" id="nombre" placeholder="Ej: Carlos"  
                {...register("nombre", {
                    required: true,
                })}
                />  

                {errors.nombre?.type === 'required' && <LabelErrorLogin>Nombre requerido</LabelErrorLogin>  }

                <Label>👤 Apellido</Label>     
                <input className={estilosLogin.input_login} type="text" name="apellido" id="apellido" placeholder="Ej: Gonzalez"  
                {...register("apellido", {
                    required: true,
                })}
                /> 
                {errors.apellido?.type === 'required' && <LabelErrorLogin>Apellido requerido</LabelErrorLogin>  }

                <Label>👤 Usuario</Label>     
                <input className={estilosLogin.input_login} type="text" name="usuario" id="usuario" placeholder="Ej: User123"  
                {...register('usuario', {
                    required:true,
                    validate: validarUsuario
                })}
                />
                { errors.usuario && <LabelErrorLogin>Usuario no valido, entre 4 y 15 caracteres</LabelErrorLogin> }


                <Label>👤 DNI</Label>     
                <input className={estilosLogin.input_login} type="number" name="dni" id="dni" placeholder="Ej: 99999999"  
                {...register('dni',{
                    required: true,
                    validate: validarDni
                })}
                />
                { errors.dni && <LabelErrorLogin>DNI no valido</LabelErrorLogin> }


                <Label>📧 Email</Label>         
                <input className={estilosLogin.input_login} type="email" name="email" id="email" placeholder="Ej: alguien@example.com"                  
                {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                })}
                
                /> 
                { errors.email?.type === 'required' && <LabelErrorLogin>Email requerido</LabelErrorLogin> }
                { errors.email?.type === 'pattern'  && <LabelErrorLogin>Email no valido</LabelErrorLogin> } 

                <Label>📞 Teléfono</Label>        
                <input className={estilosLogin.input_login} type="number" name="telefono" id="telefono" placeholder="Ej: 9999999999"                  
                {...register("telefono", {
                    required: true,
                    validate: validarTelefono
                })}
                /> 
                {errors.telefono && <LabelErrorLogin>Teléfono no valido</LabelErrorLogin>  } 

                <Label>🌍 Ubicación</Label>        
                <input className={estilosLogin.input_login} type="text" name="ubicacion" id="ubicacion" placeholder="Ej: Capital Federal"                  
                {...register("ubicacion", {
                    required: true,
                })}
                />  

                {errors.ubicacion?.type === 'required' && <LabelErrorLogin>Ubicación requerido</LabelErrorLogin>  } 

                <Label>❓ Seleccione una pregunta de seguridad</Label>        
                <select name="select" className={estilosLogin.input_login} {...register("pregunta", {required: true})}> {/*TODO, mejorar a futuro*/}
                    <option value="" >❓ Seleccione una pregunta de seguridad</option>
                    <option value="value1">¿Cúal fue el nombre de mi primera mascota?</option>
                    <option value="value2">¿Cuál es tu comida favorita?</option>
                    <option value="value3">¿Cuál es el segundo nombre de tu madre?</option>
                    <option value="value4">¿Cuál es tu color favorito?</option>
                </select> 
                {errors.pregunta?.type === 'required' && <LabelErrorLogin>Seleccione una pregunta</LabelErrorLogin>  } 

                <Label>❓ Pregunta de seguridad</Label>        
                <input className={estilosLogin.input_login} type="text" name="pregunta" id="pregunta" placeholder="Ej: Biahara"  
                {...register('preguntaSeguridad',{
                    required: true,
                })}                
                />

                { errors.preguntaSeguridad?.type === 'required'  && <LabelErrorLogin>Pregunta requerido</LabelErrorLogin> }


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
                { errors.password2  && <LabelErrorLogin>Las contraseñas no conciden</LabelErrorLogin> }

                <label className={estilosLogin.parrafo_login}>
                    <input type="checkbox" id="cbox" value="cbox" {...register("checkbox", {required: true})} /> <label>Aceptar
                        <button className={`${estilosLogin.link_login} ${estilosLogin.btn_abrir}`} type="button" onClick={() => abrirModal("terminos_condiciones")} >Términos, Condiciones</button>
                        y
                        <button className={`${estilosLogin.link_login} ${estilosLogin.btn_abrir}`} type="button" onClick={() => abrirModal("politicas_de_privacidad")} >Póliticas de privacidad</button>   
                    </label>
                </label>
                { errors.checkbox?.type === "required" && <LabelErrorLogin>Debe aceptar los términos y condiciones</LabelErrorLogin>}
                <Dialog titulo="Terminos y condiciones" id="terminos_condiciones"
                contenido="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nulla quisquam vero architecto labore magni natus veritatis dolor cupiditate, 
                odio est perspiciatis assumenda commodi minus voluptates quos placeat veniam. Et? Beatae inventore perspiciatis officiis doloremque architecto nesciunt 
                accusantium non earum soluta optio porro error asperiores suscipit eaque consectetur sed ad amet iusto velit ipsum, numquam natus. Nemo magni nesciunt 
                provident! Dolor ut consectetur delectus ad fugit eligendi exercitationem ex, et, aliquid enim provident quibusdam reprehenderit maiores ratione amet 
                doloribus. Exercitationem itaque dolore reprehenderit rem officia provident, nihil porro possimus magni. Ullam, aliquam distinctio! Facilis eveniet magni 
                aspernatur quaerat quasi earum asperiores ducimus ex enim sint repudiandae obcaecati, in officia eius autem maiores quas atque saepe ipsum tenetur dolorem 
                blanditiis nesciunt! Neque deleniti ex vitae voluptates hic aliquam obcaecati. Earum non excepturi architecto dolores. Exercitationem beatae natus similique 
                fuga ex, accusamus neque ducimus molestiae aliquam ut quo expedita, esse placeat voluptatum? Odio mollitia exercitationem voluptatem voluptas, sunt 
                veritatis totam ex harum dolores, ab omnis provident similique reiciendis blanditiis voluptates autem quam nesciunt aspernatur cupiditate molestiae 
                eaque! Dolorum eos odio quaerat soluta! Molestiae reiciendis nulla quod totam nihil, dolorum quaerat est, ipsam deserunt tenetur quisquam, ex itaque. 
                Perspiciatis ad fugit excepturi, molestiae accusamus labore temporibus earum vero veniam sequi nisi explicabo beatae. iores, quam ex a provident laudantium 
                facilis fugiat! Tempore, nemo nobis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam aut odio autem assumenda expedita quo laudantium 
                beatae dignissimos, nobis at voluptatibus maxime ipsum labore quos saepe unde est laborum quaerat. Quo reiciendis impedit iste obcaecati nulla debitis quis 
                odio ratione id, dolorem unde eius reprehenderit, magni voluptatem, asperiores exercitationem. Magni sunt libero rem doloribus quae quidem minima animi iure 
                perspiciatis? Aliquid at praesentium repellendus, harum aliquam totam id hic doloremque deserunt veritatis! Laboriosam esse quas veniam. Voluptates, 
                expedita dolorum earum qui accusamus eos possimus esse quia necessitatibus dicta, quas error. Velit aliquid quam rem. Sit cumque inventore quaerat corrupti 
                nostrum assumenda deleniti, voluptatum, quibusdam quis laudantium eos aspernatur debitis ipsum harum odio alias excepturi, molestias recusandae dolorum 
                doloribus esse facilis."/> 

                <Dialog titulo="Póliticas de privacidad" id="politicas_de_privacidad"
                contenido="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nulla quisquam vero architecto labore magni natus veritatis dolor cupiditate, 
                odio est perspiciatis assumenda commodi minus voluptates quos placeat veniam. Et? Beatae inventore perspiciatis officiis doloremque architecto nesciunt 
                accusantium non earum soluta optio porro error asperiores suscipit eaque consectetur sed ad amet iusto velit ipsum, numquam natus. Nemo magni nesciunt 
                provident! Dolor ut consectetur delectus ad fugit eligendi exercitationem ex, et, aliquid enim provident quibusdam reprehenderit maiores ratione amet 
                doloribus. Exercitationem itaque dolore reprehenderit rem officia provident, nihil porro possimus magni. Ullam, aliquam distinctio! Facilis eveniet magni 
                aspernatur quaerat quasi earum asperiores ducimus ex enim sint repudiandae obcaecati, in officia eius autem maiores quas atque saepe ipsum tenetur dolorem 
                blanditiis nesciunt! Neque deleniti ex vitae voluptates hic aliquam obcaecati. Earum non excepturi architecto dolores. Exercitationem beatae natus similique 
                fuga ex, accusamus neque ducimus molestiae aliquam ut quo expedita, esse placeat voluptatum? Odio mollitia exercitationem voluptatem voluptas, sunt 
                veritatis totam ex harum dolores, ab omnis provident similique reiciendis blanditiis voluptates autem quam nesciunt aspernatur cupiditate molestiae 
                eaque! Dolorum eos odio quaerat soluta! Molestiae reiciendis nulla quod totam nihil, dolorum quaerat est, ipsam deserunt tenetur quisquam, ex itaque. 
                Perspiciatis ad fugit excepturi, molestiae accusamus labore temporibus earum vero veniam sequi nisi explicabo beatae. iores, quam ex a provident laudantium 
                facilis fugiat! Tempore, nemo nobis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam aut odio autem assumenda expedita quo laudantium 
                beatae dignissimos, nobis at voluptatibus maxime ipsum labore quos saepe unde est laborum quaerat. Quo reiciendis impedit iste obcaecati nulla debitis quis 
                odio ratione id, dolorem unde eius reprehenderit, magni voluptatem, asperiores exercitationem. Magni sunt libero rem doloribus quae quidem minima animi iure 
                perspiciatis? Aliquid at praesentium repellendus, harum aliquam totam id hic doloremque deserunt veritatis! Laboriosam esse quas veniam. Voluptates, 
                expedita dolorum earum qui accusamus eos possimus esse quia necessitatibus dicta, quas error. Velit aliquid quam rem. Sit cumque inventore quaerat corrupti 
                nostrum assumenda deleniti, voluptatum, quibusdam quis laudantium eos aspernatur debitis ipsum harum odio alias excepturi, molestias recusandae dolorum 
                doloribus esse facilis."/> 
                <Boton value="Enviar" id="boton_registro" ></Boton>         
            </form>
    )
}
