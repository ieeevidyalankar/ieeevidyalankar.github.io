console.log("nav-events.js loaded");
document.querySelectorAll('nav a').forEach(e => {
    e.addEventListener('click', () => change(e.dataset.id));
});

function change(n) {
    let panels = document.querySelectorAll('main .panel');
    panels.forEach(p => p.classList.remove('active'));
    panels[n - 1].classList.add('active');
}

let currentIndex = 1;
showSlides(currentIndex);

function moveSlide(n) {
    showSlides(currentIndex += n);
}

function navCurrentSlide(n) {
    showSlides(currentIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    if (n > slides.length) { currentIndex = 1; }
    if (n < 1) { currentIndex = slides.length; }

    slides.forEach(slide => slide.classList.remove('active-slide'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentIndex - 1].classList.add('active-slide');
    dots[currentIndex - 1].classList.add('active');
}

// Touch event listeners for mobile
document.querySelector('.prev').addEventListener('touchstart', () => moveSlide(-1));
document.querySelector('.next').addEventListener('touchstart', () => moveSlide(1));
