/* Validacion Login*/
const usuario = document.getElementById('usuario');
const dni = document.getElementById('dni');
const password = document.getElementById('password');
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

function redireccion() {
  location.href = "/Dashboard/index.html"
}

form.addEventListener("submit", e=> {
  e.preventDefault()
  let entrar = false


  if(usuario.value.length < 4){
    alert("Usuario no valido, debe tener mas de 4 caracteres")
    entrar = true
  }
  else if(dni.value.length < 4){
    alert("DNI no valido")
    entrar = true
  }
  else if(password.value.length < 8){
    alert("Contraseña no valida, debe tener mas de 8 caracteres")
    entrar = true
  } else {
    alert("Datos validos, iniciando sesion")
    redireccion()
  }
})

// Cambio de página
