const cardsWrapper = document.querySelector('.cards-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
let visibleCards = calculateVisibleCards(); // Dynamically calculate visible cards
let totalSlides = document.querySelectorAll('.card').length; // Total number of slides (cards)

// Function to calculate the number of visible cards based on screen width
function calculateVisibleCards() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return 1; // Show 1 card on small screens (mobile)
  } else if (screenWidth < 1024) {
    return 2; // Show 2 cards on medium screens (tablets)
  } else {
    return 4; // Show 4 cards on large screens (desktops)
  }
}

// Move the slider left or right
function moveSlider() {
  const cardWidth = document.querySelector('.card').offsetWidth + parseFloat(getComputedStyle(document.querySelector('.card')).marginRight); // Card width + margin
  const maxSlide = totalSlides - visibleCards;
  
  // Correct transform to always move in the proper direction
  if (currentSlide > maxSlide) {
    currentSlide = 0; // Reset to the first card
  } else if (currentSlide < 0) {
    currentSlide = maxSlide; // Go to the last set of visible cards
  }
  
  const translateValue = -(currentSlide * cardWidth);
  cardsWrapper.style.transform = `translateX(${translateValue}px)`; // Apply translation
}

// Previous button functionality
prevBtn.addEventListener('click', () => {
  currentSlide--;
  moveSlider();
});

// Next button functionality
nextBtn.addEventListener('click', () => {
  currentSlide++;
  moveSlider();
});

// Recalculate visible cards and total slides when window resizes
window.addEventListener('resize', () => {
  visibleCards = calculateVisibleCards(); // Recalculate visible cards on resize
  totalSlides = document.querySelectorAll('.card').length; // Update total slides count
  moveSlider(); // Adjust slider position
});

// Initialize slider
moveSlider();
