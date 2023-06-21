
let botoncito =document.getElementById("inicio");
console.log(botoncito);

botoncito.addEventListener("click", cambiarColor);
botoncito.addEventListener("mousedown", cambiarTamano);

// Referido a clases pasadas
function cambiarColor() {

    console.log ("hola")
    botoncito.style.backgroundColor= "green";
}
function cambiarTamano(){
    console.log ("otro")
}


console.log("123");

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML = "ENVIADO A " + nombre.value;
}

// referido a montoyamoraga. Profesor nos ayudo a crear la estructura js del formulario

// referido W3schools modal image https://www.w3schools.com/howto/howto_css_modal_images.asp
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
// referido  W3schools modal image