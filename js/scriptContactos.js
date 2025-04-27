document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contactos');
    const sucessoModalElement = document.getElementById('sucessoModal');
  
    const sucessoModal = new bootstrap.Modal(sucessoModalElement);
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      sucessoModal.show();
      form.reset();
    });
  
    // Quando o botão Ok for clicado
    sucessoModalElement.addEventListener('hidden.bs.modal', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });