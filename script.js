// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (document.querySelector('.nav-links').classList.contains('active')) {
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert(`Thanks for your message, ${name}! I'll get back to you soon.`);
    
    // Reset form
    this.reset();
});

// Animate elements when they scroll into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animated');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Run animation check on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

document.addEventListener('DOMContentLoaded', function() {
    // Toggle switch for dark mode
    const darkToggleSwitch = document.getElementById('darkToggleSwitch');
    const darkModeLabel = document.getElementById('darkModeLabel');
    const body = document.body;

    // Set initial state from localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (darkToggleSwitch) darkToggleSwitch.checked = true;
        if (darkModeLabel) darkModeLabel.textContent = '☀️';
    }

    if (darkToggleSwitch) {
        darkToggleSwitch.addEventListener('change', function() {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                if (darkModeLabel) darkModeLabel.textContent = '☀️';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                if (darkModeLabel) darkModeLabel.textContent = '🌙';
            }
        });
    }
});
