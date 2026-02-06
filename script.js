document.addEventListener('DOMContentLoaded', () => {
    
    // --- MENÚ MÓVIL ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if(navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // Toggle manual para asegurar compatibilidad
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100px'; // Altura del nuevo header
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'white';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }

    // --- ANIMACIONES SCROLL ---
    const elementsToAnimate = document.querySelectorAll('.section, .card-service, .hero-content');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // CSS style .reveal.active
            }
        });
    });
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal'); // Ocultar inicial
        observer.observe(el);
    });
});

// --- LÓGICA MODALS (Funciones globales) ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) modal.classList.add('open');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) modal.classList.remove('open');
}

// Cerrar modal al hacer click afuera
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('open');
    }
}
