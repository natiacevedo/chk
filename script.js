// Cierra el menú hamburguesa al hacer clic en cualquier link

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse.show');
    if (navbarCollapse) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: true
      });
    }
  });
});

// Seleccionamos los elementos con la clase fade-in-up
const fadeElements = document.querySelectorAll('.fade-in-up');

// Creamos un observer para animaciones al aparecer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            // Si querés que la animación solo pase una vez, desconectamos el observer
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observamos cada elemento
fadeElements.forEach(el => observer.observe(el));


/* Fondo del header al scrollear */

const header = document.querySelector('.header-section');
const scrollOffset = 50; // a partir de cuántos px se cambia el fondo

window.addEventListener('scroll', () => {
    if(window.scrollY > scrollOffset){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* Carrusel */
// === Modal equipo ===
const modal = document.getElementById('modalPersona');
const modalTitle = modal.querySelector('.modal-title');
const modalFoto = document.getElementById('modalFoto');
const modalCargo = document.getElementById('modalCargo');
const modalInfo = document.getElementById('modalInfo');

document.querySelectorAll('.equipo-card').forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.nombre;
    modalFoto.src = card.dataset.foto;
    modalCargo.textContent = card.dataset.cargo;
    modalInfo.innerHTML = card.dataset.info.split('||').join('<br><br>');
  });
});