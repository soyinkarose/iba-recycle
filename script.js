// Simple script for Iba Recycle website

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add some interactive effects to buttons
const buttons = document.querySelectorAll('.btn-primary');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.boxShadow = '0 8px 25px rgba(31, 94, 67, 0.3)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = '';
    });
});

// Simple animation for cards on hover (already in CSS, but enhance)
const cards = document.querySelectorAll('.card, .product-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

console.log('Iba Recycle website loaded successfully!');