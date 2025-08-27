// Variables globales
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    initializeComponents();
});

// Función principal de inicialización
function initializeComponents() {
    setupMobileMenu();
    setupCarousel();
    setupSmoothScrolling();
    setupContactForm();
    setupScrollEffects();
    setupFormValidation();
}

// === MENÚ HAMBURGUESA ===
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú hamburguesa
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer click fuera del menú
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// === CAROUSEL HERO ===
function setupCarousel() {
    if (slides.length === 0) return;

    // Inicializar primer slide
    showSlide(0);

    // Auto-play del carousel
    setInterval(() => {
        nextSlide();
    }, 5000);

    // Event listeners para los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            previousSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
}

function showSlide(index) {
    // Remover clase active de todos los slides e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Activar slide e indicador actual
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// === SMOOTH SCROLLING ===
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === EFECTOS DE SCROLL ===
function setupScrollEffects() {
    const header = document.querySelector('.header');
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Efecto de header al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Intersection Observer para animaciones de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.service-card, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// === FORMULARIO DE CONTACTO ===
function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            handleFormSubmission();
        }
    });

    // Efectos visuales en los inputs
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });

        input.addEventListener('input', function() {
            if (this.value) {
                this.parentElement.classList.add('filled');
            } else {
                this.parentElement.classList.remove('filled');
            }
        });
    });
}

// === VALIDACIÓN DEL FORMULARIO ===
function setupFormValidation() {
    const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    let isValid = true;
    let errorMessage = '';

    // Limpiar errores previos
    clearFieldError(field);

    // Validar campo requerido
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Este campo es obligatorio';
    }

    // Validaciones específicas por tipo
    if (value && fieldType === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Ingrese un email válido';
        }
    }

    if (value && fieldType === 'tel') {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Ingrese un teléfono válido';
        }
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    field.style.borderColor = '#ef4444';
    
    // Remover mensaje de error previo
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Crear y mostrar mensaje de error
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem;';
    
    field.parentElement.appendChild(errorElement);
}

function clearFieldError(field) {
    field.classList.remove('error');
    field.style.borderColor = '';
    
    const errorMessage = field.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function validateForm() {
    const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
    let isFormValid = true;

    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isFormValid = false;
        }
    });

    return isFormValid;
}

// === MANEJO DEL ENVÍO DEL FORMULARIO ===
function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    // Mostrar estado de carga
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitButton.disabled = true;
    
    // Simular envío (aquí puedes integrar con tu backend)
    setTimeout(() => {
        showSuccessMessage();
        form.reset();
        clearAllErrors();
        
        // Restaurar botón
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }, 2000);
}

function showSuccessMessage() {
    // Crear mensaje de éxito
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div style="
            background: #10b981; 
            color: white; 
            padding: 1rem 2rem; 
            border-radius: 10px; 
            margin: 1rem 0; 
            text-align: center;
            animation: fadeInUp 0.5s ease;
        ">
            <i class="fas fa-check-circle"></i>
            ¡Mensaje enviado correctamente! Te contactaremos pronto.
        </div>
    `;
    
    const form = document.getElementById('contactForm');
    form.insertBefore(successMessage, form.firstChild);
    
    // Remover mensaje después de 5 segundos
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

function clearAllErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorFields = document.querySelectorAll('.error');
    
    errorMessages.forEach(msg => msg.remove());
    errorFields.forEach(field => {
        field.classList.remove('error');
        field.style.borderColor = '';
    });
}

// === FUNCIONES DE UTILIDAD ===

// Throttle function para optimizar eventos de scroll
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Función para detectar si un elemento está visible
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Agregar efectos hover adicionales a las cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Preloader para imágenes (opcional)
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const imageUrl = img.src;
        const imageElement = new Image();
        imageElement.src = imageUrl;
    });
}

// Llamar preloader al cargar la página
window.addEventListener('load', preloadImages);

// Manejo de errores global
window.addEventListener('error', function(e) {
    console.error('Error en la página:', e.error);
});

// Optimización para dispositivos táctiles
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // Agregar estilos específicos para dispositivos táctiles
    const style = document.createElement('style');
    style.textContent = `
        .touch-device .service-card:hover {
            transform: none;
        }
        .touch-device .service-card:active {
            transform: scale(0.98);
        }
    `;
    document.head.appendChild(style);
}