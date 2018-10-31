var slideNo = 1;
getSlides(slideNo);

// Next/previous controls
function addSlides(x) {
  getSlides(slideNo += x);
}

// Thumbnail image controls
function getcurrentSlide(x) {
  getSlides(slideNo = x);
}

function getSlides(x) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("demo");
  if (x > slides.length) {slideNo = 1}
  if (x < 1) {slideNo = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activepic", "");
  }
  slides[slideNo-1].style.display = "block";
  dots[slideNo-1].className += " activepic";
}

  