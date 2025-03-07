const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Light Theme';
    } else {
        themeToggleButton.textContent = 'Dark Theme';
    }
});

function startSlideshow() {
    const slides = document.querySelectorAll('.mission-image .slide');
    let currentSlide = 0;
    
    setInterval(() => {
        slides[currentSlide].style.opacity = '0';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = '1';
    }, 5000); // Change image every 5 seconds
}

document.addEventListener('DOMContentLoaded', startSlideshow);