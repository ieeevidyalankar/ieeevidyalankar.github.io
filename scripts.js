$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  var init = function() {
    body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
      $(this).removeClass('hide-UI').addClass("set-speed");
      $(this).dequeue();
    });
  };

  var setView = function(view) { universe.removeClass().addClass(view); };

  $("#toggle-data").click(function(e) {
    body.toggleClass("data-open data-close");
    e.preventDefault();
  });

  $("#toggle-controls").click(function(e) {
    body.toggleClass("controls-open controls-close");
    e.preventDefault();
  });

  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
  $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
  $(".set-size").click(function() { setView("scale-s set-size"); });
  $(".set-distance").click(function() { setView("scale-d set-distance"); });

  init();

  // Select all 'See More' buttons
var seeMoreButtons = document.querySelectorAll('.see-more');

seeMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the parent event card
    const card = button.closest('.event-card');
    
    // Toggle the 'expanded' class only for the clicked event card
    card.classList.toggle('expanded');
    
    // Update the button text based on expansion state
    if (card.classList.contains('expanded')) {
      button.textContent = 'See Less';
    } else {
      button.textContent = 'See More';
    }
  });
});

});


//Java Script-
const testimonials = [
  {
      name: "Prof. Pranita Padhye",
      role: "IEEE-VIT CONVENER",
      quote: "Mrs. Pranita Padhye is the convenor fo the IEEE-VIT Student Branch. Her career reflects her dedication to inspiring and educating young minds. Starting with an Engineering degree in Electronics and Telecommunication, her passion led her to teach at Vidyalankar Institute of Technology, where she earned her master’s from NMU Jalgaon.", 
      image: "./assets/images/convenor.png"
  },
  {
      name: "Dr. Pratik Mhatre",
      role: "IEEE-VIT AMBASSADOR",
      quote: "Dr. Prateek Mhatre is an accomplished engineer with a passion for applying theoretical concepts to benefit humanity. Specializing in Electronics and Telecommunication, he developed a keen interest in RF, Microwave, and Antenna technologies during his academic journey. ",
      image:  "./assets/images/ambassador.png"
  },
  
];

// Elements
const profileImage = document.getElementById("profile-image");
const nameElement = document.getElementById("name");
const roleElement = document.getElementById("role");
const quoteElement = document.getElementById("quote");
const dots = document.querySelectorAll('.dot');

// Function to update the testimonial
function updateTestimonial(index) {
  // Update content
  profileImage.src = testimonials[index].image;
  nameElement.textContent = testimonials[index].name;
  roleElement.textContent = testimonials[index].role;
  quoteElement.textContent = testimonials[index].quote;

  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Add click event to dots
dots.forEach(dot => {
  dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      updateTestimonial(index);
  });
});