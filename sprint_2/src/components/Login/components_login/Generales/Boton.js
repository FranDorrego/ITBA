import { useNavigate } from 'react-router-dom';
import estilosLogin from '../../stylesLogin.module.css'


export function Boton({value, id}){  
    const navigate = useNavigate();

    function validarDatos(){
        const boton = document.getElementById(id);
        if (boton.id === "boton_inicio_sesion"){
            validarDatosLogin();
        }
        else if (boton.id === "boton_password"){
            validarDatosPassword();
        }
        else {
            validarDatosRegistro();
        }
    }
    
    function validarDatosLogin(){
        const boton = document.getElementById('boton_inicio_sesion'); 
        const usuario = document.getElementById('usuario');
        const dni = document.getElementById('dni');
        const password = document.getElementById('password');

    
        // PREVIENE QUE NO SE REFRESEQUE LA PAGINA CUANDO SE LE DA AL BOTON
        boton.addEventListener("click", (event) =>{
            event.preventDefault();
        })
        
        if(usuario.value.length < 4){
            alert("Usuario no valido, debe tener mas de 4 caracteres")
        }
        else if(dni.value.length < 4){
            alert("DNI no valido")
        }
        else if(password.value.length < 8){
            alert("Contraseña no valida, debe tener mas de 8 caracteres")
        } else {
            alert("Datos validos, iniciando sesion")
            navigate("/dashboard")
        }
    }
    
    function validarDatosPassword(){
        const boton = document.getElementById('boton_password')
        const dni = document.getElementById('dni');
        const email = document.getElementById('email');
        const password1 = document.getElementById('password1');
        const password2 = document.getElementById('password2');
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
        // PREVIENE QUE NO SE REFRESEQUE LA PAGINA CUANDO SE LE DA AL BOTON
        boton.addEventListener("click", (event) =>{
            event.preventDefault();
    
        })
        if(!regexEmail.test(email.value)){
            alert("Email no valido")
          }
          else if(dni.value.length < 4){
            alert("DNI no valido")
          }
          else if(password1.value !== password2.value || password1.value.length < 8 || password2.value.length < 8){
            alert("Las contraseñas no coinciden o no son validas, debe tener mas de 8 caracteres")
          }
          else {
           alert("Enviado con éxito, yendo al login")
           navigate("/login")
          }
    }
    
    function validarDatosRegistro(){
        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const usuario = document.getElementById('usuario');
        const dni = document.getElementById('dni');
        const email = document.getElementById('email');
        const telefono = document.getElementById('telefono');
        const ubicacion = document.getElementById('ubicacion');
        const password1 = document.getElementById('password1');
        const password2 = document.getElementById('password2');
        const cbox = document.getElementById('cbox');
        const boton = document.getElementById('boton_registro')
    
        boton.addEventListener("click", (event) =>{
            event.preventDefault();
        })
    
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(nombre.value === ''){
            alert("Rellene la casilla de nombre")
        }
        else if (apellido.value === ''){
            alert("Rellene la casilla de apellido")
        }
        else if(usuario.value.length < 4){
            alert("Usuario no valido, debe ser mayor a 4 caracteres")
        }
        else if(dni.value.length < 4){
            alert("DNI no valido")
        }
        else if(!regexEmail.test(email.value)){
            alert("Email no valido")
        }
        else if(telefono.value.length < 7){
            alert("Teléfono no valido")
        }
        else if(ubicacion.value === ''){
            alert("Rellene la casilla de ubicacion")
        }
        else if(password1.value !== password2.value || password1.value.length < 8 || password2.value.length < 8){
            alert("Las contraseñas no coinciden o no son validas, debe tener mas de 8 caracteres")
        }
        else if(!cbox.checked){
            alert("Debe aceptar los términos y condiciones para seguir")
        }
        else{
            alert("Cuenta creada con éxito, yendo al login")
            navigate("/login")
        }
    }
    
    
    return(
            <input className={`${estilosLogin.boton_login}  ${estilosLogin.input_login}`}  type="submit" value={value} id={id} onClick={validarDatos}/>
        )
}




