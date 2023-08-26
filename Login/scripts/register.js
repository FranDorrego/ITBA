
// Términos y condiciones
const modal = document.querySelector('.dialog');
const cerrarModal = document.querySelector('.btn-cerrar');
const abrirModal = document.querySelector('.btn-abrir');

// Event listener para cerrar
cerrarModal.addEventListener('click', function() {
  modal.close();
});

// Event listener para abrir
abrirModal.addEventListener('click', function() {
  modal.showModal();
});


// Validar formulario
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const dni = document.getElementById('dni');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const ubicacion = document.getElementById('ubicacion');
const pregunta = document.getElementById('pregunta');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const cbox = document.getElementById('cbox');
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=> {
  e.preventDefault()
  let entrar = false
  let warnings = ""
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  parrafo.innerHTML = ""

  if(usuario.value.length < 4){
    warnings += `Usuario no valido, debe ser mayor a 4 caracteres (3er item) <br>`
    entrar = true
  }

  if(dni.value.length < 4){
    warnings += `DNI no valido (4to item) <br>`
    entrar = true
  }

  if(!regexEmail.test(email.value)){
    warnings += `Email no valido (5to item) <br>`
    entrar = true
  }

  if(telefono.value.length < 7){
    warnings += `Teléfono no valido (6to item) <br>`
    entrar = true
  }

  if(password1.value != password2.value || password1.value.length < 8 || password2.value.length < 8){
    warnings += `Las contraseñas no coinciden o no son validas, debe tener mas de 8 caracteres<br>`
    entrar = true
  }

  if(!cbox.checked){
    warnings += `Debe aceptar los términos y condiciones para seguir <br>`
    entrar = true
  }

  if(entrar){
    parrafo.innerHTML = warnings
  } 
  else{
    parrafo.innerHTML = "Enviado con éxito"
  }
})

