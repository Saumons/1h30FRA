/**
 * ============================================
 * SCRIPT PRINCIPAL - Animaux & Élections Municipales
 * ============================================
 * 
 * Ce script gère :
 * - La navigation active au scroll
 * - Le scroll fluide vers les sections
 * - Les animations au scroll (Intersection Observer)
 * - L'effet de navigation au scroll (navbar)
 * - Les statistiques animées
 */

// ============================================
// VARIABLES GLOBALES
// ============================================
let lastScrollTop = 0;
const navbar = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

// ============================================
// NAVIGATION ACTIVE AU SCROLL
// ============================================
/**
 * Détecte quelle section est visible et met à jour la navigation
 */
function updateActiveNavOnScroll() {
    const scrollPosition = window.scrollY + 200; // Offset pour déclencher plus tôt
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // Vérifie si la section est dans la zone visible
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Retire la classe active de tous les liens
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Ajoute la classe active au lien correspondant
            const activeLink = document.querySelector(`.nav-links a[data-section="${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// ============================================
// EFFET NAVBAR AU SCROLL
// ============================================
/**
 * Ajoute une ombre à la navbar quand on scroll
 */
function handleNavbarScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
}

// ============================================
// SCROLL FLUIDE VERS LES SECTIONS
// ============================================
/**
 * Fonction pour scroller de façon fluide vers une section
 * @param {string} sectionId - L'ID de la section cible
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = section.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Ajoute les événements click aux liens de navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = link.getAttribute('data-section');
        scrollToSection(targetSection);
    });
});

// ============================================
// ANIMATIONS AU SCROLL (INTERSECTION OBSERVER)
// ============================================
/**
 * Observe les éléments et déclenche des animations quand ils deviennent visibles
 */
function initScrollAnimations() {
    // Sélectionne tous les éléments à animer
    const animatedElements = document.querySelectorAll(
        '.association-card, .tendance-card, .candidat-item, .timeline-item, .stats-box'
    );
    
    // Configuration de l'observer
    const observerOptions = {
        root: null, // Utilise le viewport
        rootMargin: '0px',
        threshold: 0.1 // Déclenche quand 10% de l'élément est visible
    };
    
    // Callback appelé quand un élément devient visible
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute une classe pour déclencher l'animation CSS
                entry.target.classList.add('visible');
                // Optionnel : arrête d'observer après l'animation
                // observer.unobserve(entry.target);
            }
        });
    };
    
    // Crée l'observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe chaque élément
    animatedElements.forEach(element => {
        element.classList.add('fade-in-on-scroll');
        observer.observe(element);
    });
}

// ============================================
// ANIMATION DES STATISTIQUES
// ============================================
/**
 * Anime les chiffres des statistiques quand ils deviennent visibles
 */
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5 // Déclenche quand 50% de l'élément est visible
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateNumber(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    stats.forEach(stat => {
        observer.observe(stat);
    });
}

/**
 * Anime un nombre de 0 à sa valeur finale
 * @param {HTMLElement} element - L'élément contenant le nombre
 */
function animateNumber(element) {
    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    
    // Extrait le nombre
    let targetNumber = parseInt(text.replace(/[^\d]/g, ''));
    
    // Si ce n'est pas un nombre valide, on annule
    if (isNaN(targetNumber)) return;
    
    const duration = 2000; // 2 secondes
    const startTime = Date.now();
    
    function update() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Fonction d'easing pour une animation plus naturelle
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentNumber = Math.floor(targetNumber * easeOutQuart);
        
        // Met à jour le texte
        let displayText = currentNumber.toString();
        if (hasPercent) displayText += '%';
        if (hasPlus) displayText += '+';
        
        element.textContent = displayText;
        
        // Continue l'animation si pas terminée
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            // Remet la valeur finale exacte
            element.textContent = text;
        }
    }
    
    update();
}

// ============================================
// SMOOTH SCROLL POUR LES ANCIENS NAVIGATEURS
// ============================================
/**
 * Polyfill pour le smooth scroll sur les navigateurs qui ne le supportent pas
 */
function smoothScrollPolyfill() {
    // Vérifie si le navigateur supporte scroll-behavior: smooth
    if (!('scrollBehavior' in document.documentElement.style)) {
        // Ajoute un polyfill simple si nécessaire
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ============================================
// GESTION DES IMAGES LAZY LOADING
// ============================================
/**
 * Optimise le chargement des images avec lazy loading
 */
function initLazyLoading() {
    // Vérifie si le navigateur supporte le lazy loading natif
    if ('loading' in HTMLImageElement.prototype) {
        // Le lazy loading est déjà géré par l'attribut loading="lazy"
        console.log('Native lazy loading supporté');
    } else {
        // Fallback avec Intersection Observer pour les anciens navigateurs
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ============================================
// EFFET PARALLAXE LÉGER (OPTIONNEL)
// ============================================
/**
 * Ajoute un léger effet parallaxe aux images hero
 */
function initParallax() {
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            // Applique l'effet uniquement si on est dans la zone du hero
            if (scrolled < window.innerHeight) {
                heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
}

// ============================================
// DEBOUNCE UTILITY
// ============================================
/**
 * Fonction utilitaire pour limiter la fréquence d'exécution d'une fonction
 * @param {Function} func - La fonction à débouncer
 * @param {number} wait - Le délai en millisecondes
 */
function debounce(func, wait) {
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

// ============================================
// EVENT LISTENERS
// ============================================
/**
 * Initialise tous les event listeners
 */
function initEventListeners() {
    // Scroll events avec debounce pour optimiser les performances
    window.addEventListener('scroll', debounce(() => {
        updateActiveNavOnScroll();
        handleNavbarScroll();
    }, 10));
    
    // Resize event
    window.addEventListener('resize', debounce(() => {
        // Actions à effectuer lors du redimensionnement
        console.log('Fenêtre redimensionnée');
    }, 250));
    
    // Click sur le bouton CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Animation au clic
            ctaButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                ctaButton.style.transform = '';
            }, 150);
        });
    }
}

// ============================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ============================================
/**
 * Fonction principale appelée au chargement du DOM
 */
function init() {
    console.log('🐾 Site Animaux & Élections Municipales - Chargé');
    
    // Initialise toutes les fonctionnalités
    initEventListeners();
    initScrollAnimations();
    animateStats();
    smoothScrollPolyfill();
    initLazyLoading();
    initParallax();
    
    // Met à jour la navigation au chargement
    updateActiveNavOnScroll();
    
    // Animation de chargement terminée
    document.body.classList.add('loaded');
}

// ============================================
// DÉMARRAGE
// ============================================
// Attends que le DOM soit complètement chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM déjà chargé
    init();
}

// ============================================
// EXPOSITION GLOBALE DE LA FONCTION scrollToSection
// ============================================
// Permet d'appeler scrollToSection depuis le HTML (onclick)
window.scrollToSection = scrollToSection;

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log('%c🐾 Merci de votre visite ! ', 'font-size: 20px; color: #2d5016; font-weight: bold;');
console.log('%cPour en savoir plus sur la cause animale en politique, continuez votre lecture !', 'font-size: 12px; color: #666;');
