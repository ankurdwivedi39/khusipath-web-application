// Simple testimonial slider functionality
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(n) {
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });
    
    currentTestimonial = (n + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showTestimonial(0);
    
    // Auto rotate testimonials every 5 seconds
    setInterval(() => {
        showTestimonial(currentTestimonial + 1);
    }, 5000);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements when scrolling
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.feature-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animation states
window.addEventListener('load', function() {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);
