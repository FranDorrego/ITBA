// Validar formulario
const dni = document.getElementById('dni');
const email = document.getElementById('email');
const pregunta = document.getElementById('pregunta');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=> {
  e.preventDefault()
  let entrar = false
  let warnings = ""
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  parrafo.innerHTML = ""

  
  if(!regexEmail.test(email.value)){
    warnings += `Email no valido (primer item) <br>`
    entrar = true
  }

  if(dni.value.length < 4){
    warnings += `DNI no valido (segundo item)  <br>`
    entrar = true
  }

  if(password1.value != password2.value || password1.value.length < 8 || password2.value.length < 8){
    warnings += `Las contraseñas no coinciden o no son validas, debe tener mas de 8 caracteres<br>`
    entrar = true
  }


  if(entrar){
    parrafo.innerHTML = warnings
  } 
  else{
    parrafo.innerHTML = "Enviado con éxito"
  }
})

