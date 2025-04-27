// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os cards que têm data-bs-toggle="modal"
    const cards = document.querySelectorAll('[data-bs-toggle="modal"]');
  
    cards.forEach(card => {
      card.addEventListener('click', function() {
        const modalId = card.getAttribute('data-bs-target');
        const modal = new bootstrap.Modal(document.querySelector(modalId));
        modal.show();
      });
    });
  });