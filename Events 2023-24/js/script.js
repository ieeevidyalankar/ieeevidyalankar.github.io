let header = document.querySelector(".nav-bar");
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'enter', 'leave');

        if (i === index) {
            slide.classList.add('active'); // Show current slide
        } else if (i === (index + 1) % totalSlides) {
            slide.classList.add('enter'); // Prepare next slide to come in
        } else {
            slide.classList.add('leave'); // Hide other slides
        }
    });
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentIndex);
}

showSlide(currentIndex); // Show the first slide initially
setInterval(showNextSlide, 3000); // Change slide every 3 seconds
