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
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  
  if(!regexEmail.test(email.value)){
    alert("Email no valido (primer item)")
  }
  else if(dni.value.length < 4){
    alert("DNI no valido (segundo item)")
  }
  else if(password1.value != password2.value || password1.value.length < 8 || password2.value.length < 8){
    alert("Las contraseñas no coinciden o no son validas, debe tener mas de 8 caracteres")
  }
  else {
   alert("Enviado con éxito")
  }

})

