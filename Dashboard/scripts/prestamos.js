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

// redireccion
function redireccion() {
    location.href = "/Dashboard/error.html"
}