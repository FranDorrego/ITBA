/* Validacion Login*/
const usuario = document.getElementById('usuario');
const dni = document.getElementById('dni');
const password = document.getElementById('password');
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=> {
  e.preventDefault()
  let entrar = false
  let warnings = ""
  parrafo.innerHTML = ""


  if(usuario.value.length < 4){
    warnings += `Usuario no valido <br>`
    entrar = true
  }

  if(dni.value.length < 4){
    warnings += `DNI no valido <br>`
    entrar = true
  }

  if(password.value.length < 8){
    warnings += `Contraseña no valida <br>`
    entrar = true
  }

  if(entrar){
    parrafo.innerHTML = warnings
  } 
  else{
    parrafo.innerHTML = "Enviado con éxito"
  }
})

