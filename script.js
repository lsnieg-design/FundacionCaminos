document.addEventListener('DOMContentLoaded', () => {
    
    // --- MENÚ MÓVIL (Lógica existente) ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if(navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // Alternamos una clase 'show' para manejarlo con CSS o JS simple
            navMenu.classList.toggle('show-menu');
            
            // Estilos inline simples para despliegue rápido si no usas CSS extra
            if (navMenu.style.display === 'flex' && window.innerWidth < 992) {
                navMenu.style.display = 'none';
            } else if (window.innerWidth < 992) {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '80px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'white';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                navMenu.style.zIndex = '999';
            }
        });
    }

    // --- MOTOR DE ANIMACIONES (Scroll Reveal) ---
    
    // 1. Seleccionamos qué elementos queremos animar
    const elementsToAnimate = document.querySelectorAll('.section, .card-service, .hero-content, .split-side, .history-block');

    // 2. Configuramos el "Observador" (El ojo que mira el scroll)
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agrega la clase .active para iniciar la animación
                entry.target.classList.add('active');
                // Deja de observar (para que no se anime de nuevo al subir)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 3. Aplicamos la clase inicial y activamos el observador
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal'); // Los ocultamos al principio
        observer.observe(el);       // Empezamos a vigilarlos
    });
});