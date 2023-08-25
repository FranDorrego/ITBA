
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

// Póliticas de privacidad
const modal2 = document.querySelector('.dialog2');
const cerrarModal2 = document.querySelector('.btn-cerrar2');
const abrirModal2 = document.querySelector('.btn-abrir2');

// Event listener para cerrar
cerrarModal.addEventListener('click', function() {
  modal2.close();
});

// Event listener para abrir
abrirModal.addEventListener('click', function() {
  modal2.showModal();
});