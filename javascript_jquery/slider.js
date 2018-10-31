var slideIndex = 0;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var timer;
showSlides();

function showSlides() {   //show the slides 
    var i;    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeCircle", "");
  }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " activeCircle";
    timer = setTimeout(showSlides, 4000); // Change image every 5 seconds
}

function currentSlide(no) { //gets current slide when user clicks on the dot
    var i;    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeCircle", "");
  }
    slideIndex = no;
    slides[no-1].style.display = "block";
    dots[slideIndex-1].className += " activeCircle";
    clearTimeout(timer);
    timer = setTimeout(showSlides,4000);
}

