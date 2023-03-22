// $(function () { // Same as document.addEventListener("DOMContentLoaded"...

//   // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
//   $("#navbarToggle").blur(function (event) {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 768) {
//       $("#collapsable-nav").collapse('hide');
//     }
//   });

// //   // In Firefox and Safari, the click event doesn't retain the focus
// //   // on the clicked button. Therefore, the blur event will not fire on
// //   // user clicking somewhere else in the page and the blur event handler
// //   // which is set up above will not be called.
// //   // Refer to issue #28 in the repo.
// //   // Solution: force focus on the element that the click event fired on
// //   $("#navbarToggle").click(function (event) {
// //     $(event.target).focus();
// //   });
// // });

// var popUp = document.getElementById("popUp");

// var img = document.getElementById("p_image")

// popUp.onclick = function(){
//   img.style.display = "block";
// }



function pop(){
  document.getElementById("p_image").style.display = "block";
}

function remove(){
  document.getElementById("p_image").style.display = "none";
}


// *****Slide pics code


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}