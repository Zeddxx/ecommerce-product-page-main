window.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".lists-items li a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].classList.remove("active");
        }
        this.classList.add("active");
      });
    }
  });

  window.addEventListener("DOMContentLoaded", function() {
    var previewSpans = document.querySelectorAll(".product-thumbnail span");
    var mainPreview = document.querySelector(".main-preview");
  
    previewSpans.forEach(function(span) {
      span.addEventListener("click", function() {
        var image = this.getAttribute("data-image");
        mainPreview.style.backgroundImage = "url(" + image + ")";
  
        // Remove active class from other spans
        previewSpans.forEach(function(span) {
          span.classList.remove("show");
          span.classList.remove("on-show");
        });
  
        // Add active class to the clicked span
        this.classList.add("show");
        this.classList.add("on-show");
      });
    });
  });

  window.addEventListener("DOMContentLoaded", function() {
    var previewSpans = document.querySelectorAll(".all-images span");
    var mainPreview = document.querySelector(".main-img");
  
    previewSpans.forEach(function(span) {
      span.addEventListener("click", function() {
        var image = this.getAttribute("data-image");
        mainPreview.style.backgroundImage = "url(" + image + ")";
  
        // Remove active class from other spans
        previewSpans.forEach(function(span) {
          span.classList.remove("show");
          span.classList.remove("on-show");
        });
  
        // Add active class to the clicked span
        this.classList.add("show");
        this.classList.add("on-show");
      });
    });
  
    var prevButton = document.querySelector(".prev-btn");
    var nextButton = document.querySelector(".next-btn");
  
    prevButton.addEventListener("click", function() {
      var activeSpan = document.querySelector(".all-images span.on-show");
      var previousSpan = activeSpan.previousElementSibling;
  
      if (previousSpan) {
        var image = previousSpan.getAttribute("data-image");
        mainPreview.style.backgroundImage = "url(" + image + ")";
  
        // Remove active class from current span and add to previous span
        activeSpan.classList.remove("show");
        activeSpan.classList.remove("on-show");
        previousSpan.classList.add("show");
        previousSpan.classList.add("on-show");
      }
    });
  
    nextButton.addEventListener("click", function() {
      var activeSpan = document.querySelector(".all-images span.on-show");
      var nextSpan = activeSpan.nextElementSibling;
  
      if (nextSpan) {
        var image = nextSpan.getAttribute("data-image");
        mainPreview.style.backgroundImage = "url(" + image + ")";
  
        // Remove active class from current span and add to next span
        activeSpan.classList.remove("show");
        activeSpan.classList.remove("on-show");
        nextSpan.classList.add("show");
        nextSpan.classList.add("on-show");
      }
    });
  });
  
  const openPreview = document.querySelector('.main-preview');
  const carouselShow = document.querySelector('.carousel');
  let closeBtn = document.querySelector('.close');
  
  // Initially hide the carousel element
  carouselShow.style.display = "none";
  
  closeBtn.addEventListener('click', () => {
    carouselShow.style.display = "none";
    enableScroll(); // Re-enable scrolling when closing the preview
  });
  
  openPreview.addEventListener('click', () => {
    let displayHidden = carouselShow.style.display;
    if (displayHidden === 'none') {
      carouselShow.style.display = 'flex';
      disableScroll(); // Disable scrolling when opening the preview
    } else {
      carouselShow.style.display = "none";
      enableScroll(); // Re-enable scrolling when closing the preview
    }
  });
  
  function disableScroll() {
    // Store the current scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.scrollTo(0, scrollPosition);
  }
  
  function enableScroll() {
    // Restore scrolling
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
  



  




  const mobileMenu = document.querySelector('.lists-items');
const openNav = document.querySelector('.open-menu');
const closeNav = document.querySelector('.close-menu');
const body = document.querySelector('body');

function getComputedStyleValue(element, property) {
  return window.getComputedStyle(element).getPropertyValue(property);
}

function toggleMenu() {
  const isMenuOpen = getComputedStyleValue(mobileMenu, 'display') === 'none';

  mobileMenu.style.display = isMenuOpen ? 'flex' : 'none';
  openNav.style.display = isMenuOpen ? 'none' : 'grid';
  closeNav.style.display = isMenuOpen ? 'grid' : 'none';
  body.style.overflow = isMenuOpen ? 'hidden' : 'scroll';
}

function openMenu() {
  toggleMenu();
}

function closeMenu() {
  toggleMenu();
}
