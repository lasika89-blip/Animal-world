const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    });
}

if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-black/90', 'backdrop-blur-md');
        navbar.classList.remove('bg-transparent');
    } else {
        // Only transparent on home page or check if it has a specific glass class
        // For simplicity, we keep the specific page styles in mind, but generally:
        if (document.title.includes("Home")) {
            navbar.classList.remove('shadow-lg', 'bg-black/90', 'backdrop-blur-md');
            navbar.classList.add('bg-transparent');
        }
    }
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Target elements to animate
// We can manually add a class '.reveal' to elements we want to animate in HTML, 
// or select key elements
document.querySelectorAll('section h2, section p, .gallery-item, section img').forEach(el => {
    el.classList.add('opacity-0'); // Start hidden
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Custom handling for Elements that already have animation classes (like Hero)
// This script runs after DOM load, so we ensure no conflict.
