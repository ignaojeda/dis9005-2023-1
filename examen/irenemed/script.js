// Mensaje de consola, codigos base extraidos de mi solemne 2
console.log("Bienvenido al mundo de los amigurumis");
// Codigos que corresponden a lo investigado, codigos sacados de la pagina web https://www.w3schools.com/howto/howto_js_slideshow.asp 
// Codigos modificados segun mis necesidades
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Codigos extraidos de mi solemne 2
let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML =
    "Gracias por visitar esta pagina " + comentario.value;
    alert("Que genial " + comentario.value)
}