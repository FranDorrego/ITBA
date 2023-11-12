
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
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if(usuario.value.length < 4){
    alert("Usuario no valido, debe ser mayor a 4 caracteres (3er item)")
  }
  else if(dni.value.length < 4){
    alert("DNI no valido (4to item)")
  }
  else if(!regexEmail.test(email.value)){
    alert("Email no valido (5to item)")
  }
  else if(telefono.value.length < 7){
    alert("Teléfono no valido (6to item)")
  }
  else if(password1.value != password2.value || password1.value.length < 8 || password2.value.length < 8){
    alert("Las contraseñas no coinciden o no son validas, debe tener mas de 8 caracteres")
  }
  else if(!cbox.checked){
    alert("Debe aceptar los términos y condiciones para seguir")
  }
  else{
    alert("Enviado con éxito")
  }
})

