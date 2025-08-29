// Menu Hamburguesa
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    // Ocultar todas las slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Ajustar índice si es necesario
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
    
    // Mostrar slide actual
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Navegación del carousel
document.getElementById('prevSlide').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.getElementById('nextSlide').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Indicadores del carousel
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});

// Cambio automático de slides
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Validación del formulario
const budgetForm = document.getElementById('budgetForm');

budgetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación básica
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !service || !message) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }
    
    // Simulación de envío
    alert('¡Gracias por su consulta! Nos pondremos en contacto a la brevedad.');
    budgetForm.reset();
});

// Smooth scrolling para enlaces de anclaje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});