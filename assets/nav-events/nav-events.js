console.log("nav-events.js loaded");

// Tab switching functionality
document.querySelectorAll('nav a').forEach(e => {
    e.addEventListener('click', () => changeTab(e.dataset.id));
});

function changeTab(tabId) {
    let panels = document.querySelectorAll('main .panel');
    panels.forEach(panel => panel.classList.remove('active'));
    panels[tabId - 1].classList.add('active');
}

// Carousel functionality
let currentIndex = 0; // Default starting slide index
let isTransitioning = false; // Prevent simultaneous transitions

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// Initialize carousel
showSlides(currentIndex);

// Show specific slide
function showSlides(index) {
    currentIndex = index; // Update currentIndex

    // Remove 'active-slide' class from all slides and 'active' from all dots
    slides.forEach(slide => slide.classList.remove('active-slide'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add 'active-slide' to the current slide and 'active' to the current dot
    slides[currentIndex].classList.add('active-slide');
    dots[currentIndex].classList.add('active');
}

// Navigate slides manually
function moveSlide(direction) {
    if (isTransitioning) return; // Prevent interaction during transition
    isTransitioning = true;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    showSlides(currentIndex);

    setTimeout(() => {
        isTransitioning = false; // Unlock after transition
    }, 200); // Adjust to match your CSS transition time
}

// Attach event listeners for manual navigation
document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
document.querySelector(".next").addEventListener("click", () => moveSlide(1));

// Auto-scroll functionality
let autoScrollInterval = setInterval(() => moveSlide(1), 3000);

// Pause auto-scroll on hover and resume on mouseout
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.addEventListener("mouseover", () => clearInterval(autoScrollInterval));
carouselContainer.addEventListener("mouseout", () => {
    autoScrollInterval = setInterval(() => moveSlide(1), 3000);
});

// Touch event listeners for mobile navigation
carouselContainer.addEventListener("touchstart", handleTouchStart, { passive: true });
carouselContainer.addEventListener("touchmove", handleTouchMove, { passive: true });

let startX = 0;

function handleTouchStart(e) {
    startX = e.touches[0].clientX;
}

function handleTouchMove(e) {
    const touchDelta = e.touches[0].clientX - startX;

    if (touchDelta > 50) { // Swiped left
        moveSlide(-1); // Move to the next slide
    } else if (touchDelta < -50) { // Swiped right
        moveSlide(1); // Move to the previous slide
    }
}


console.log("nav-events.js loaded");

// Manage tab switching
document.querySelectorAll('nav a.nav-linked').forEach(e => {
    e.addEventListener('click', (event) => {
        // Remove 'active' class from all links
        document.querySelectorAll('nav a.nav-linked').forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        e.classList.add('active');

        // Call changeTab function (or similar) to handle content switching based on data-id
        changeTab(e.dataset.id);
    });
});

function changeTab(tabId) {
    let panels = document.querySelectorAll('main .panel');
    panels.forEach(panel => panel.classList.remove('active'));
    panels[tabId - 1].classList.add('active');
}

function generateUniqueClass(prefix) {
    const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number
    return `${prefix}${randomNumber}`;
  }

  // Apply unique class names
  const uniqueClassNameForDetails = generateUniqueClass('details');
  const uniqueClassNameForImage = generateUniqueClass('image');

  const contentDiv = document.getElementById('content');
  const imageElement = document.getElementById('image');

  // Add unique classes to elements
  contentDiv.classList.add(uniqueClassNameForDetails, 'unique-class');
  imageElement.classList.add(uniqueClassNameForImage, 'unique-class');

  console.log('Unique class for details:', uniqueClassNameForDetails);
  console.log('Unique class for image:', uniqueClassNameForImage);
