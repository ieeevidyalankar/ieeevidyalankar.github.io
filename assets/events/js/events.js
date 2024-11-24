// Use unique variable names for the second file
const cardsWrapperSlider = document.querySelector('.cards-wrapper');
const prevBtnSlider = document.getElementById('prevBtn');
const nextBtnSlider = document.getElementById('nextBtn');

let currentCardSlide = 0;
let visibleCardsSlider = calculateVisibleCardsSlider(); // Dynamically calculate visible cards
let totalCardSlides = document.querySelectorAll('.card').length; // Total number of slides (cards)

// Function to calculate the number of visible cards based on screen width
function calculateVisibleCardsSlider() {
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
function moveCardSlider() {
  const cardWidth = document.querySelector('.card').offsetWidth + parseFloat(getComputedStyle(document.querySelector('.card')).marginRight); // Card width + margin
  const maxCardSlide = totalCardSlides - visibleCardsSlider;
  
  // Correct transform to always move in the proper direction
  if (currentCardSlide > maxCardSlide) {
    currentCardSlide = 0; // Reset to the first card
  } else if (currentCardSlide < 0) {
    currentCardSlide = maxCardSlide; // Go to the last set of visible cards
  }
  
  const translateValue = -(currentCardSlide * cardWidth);
  cardsWrapperSlider.style.transform = `translateX(${translateValue}px)`; // Apply translation
}

// Previous button functionality
prevBtnSlider.addEventListener('click', () => {
  currentCardSlide--;
  moveCardSlider();
});

// Next button functionality
nextBtnSlider.addEventListener('click', () => {
  currentCardSlide++;
  moveCardSlider();
});

// Recalculate visible cards and total slides when window resizes
window.addEventListener('resize', () => {
  visibleCardsSlider = calculateVisibleCardsSlider(); // Recalculate visible cards on resize
  totalCardSlides = document.querySelectorAll('.card').length; // Update total slides count
  moveCardSlider(); // Adjust slider position
});

// Initialize slider
moveCardSlider();