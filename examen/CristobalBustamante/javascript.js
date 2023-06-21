console.log("Bienvenido al Portafolio de Mercy Howlett");
// Comando para ocultar puntero
document.body.style.cursor = "none";
// Comando de nuevo puntero
// Codigo recuperado de el siguiente video https://www.youtube.com/watch?v=8QrGI-MQ2fA&ab_channel=TemplunebyDiegoVel%C3%A1zquez
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    `top: ${e.pageY - 0}px; left: ${e.pageX - 0}px;`,
  );
});
//Linea de código adaptada y extraida de W3School https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_video_js_propl//
var myVideo = document.getElementById("video1");
function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}
function makeBig() {
  myVideo.width = 1280;
}
function makeNormal() {
  myVideo.width = 1000;
}
function makeSmall() {
  myVideo.width = 720;
}
//Detección de clickeo de botones, codigo adaptado desde https://www.youtube.com/watch?v=wzU3IzryFfA&t=8s&ab_channel=TruzzBlogg//
//boton 0//
let btn0 = document.querySelector('#boton0');

function printClick() {
  console.log("El boton ha sido detectado correctamente")
}

btn0.addEventListener('click', printClick);
//boton 1//
let btn1 = document.querySelector('#boton1');

function printClick() {
  console.log("El boton ha sido detectado correctamente")
}

btn1.addEventListener('click', printClick);
//boton 2//
let btn2 = document.querySelector('#boton2');

function printClick() {
  console.log("El boton ha sido detectado correctamente")
}

btn2.addEventListener('click', printClick);
//boton 3//
let btn3 = document.querySelector('#boton3');

function printClick() {
  console.log("El boton ha sido detectado correctamente")
}

btn3.addEventListener('click', printClick);
//boton 4//
let btn4 = document.querySelector('#boton4');

function printClick() {
  console.log("El boton ha sido detectado correctamente")
}
btn4.addEventListener('click', printClick);
//Cambiar color de background https://www.youtube.com/watch?v=0uhFRe6y8Gs&t=79s&ab_channel=MarcDoze//
let selectorcolor = document.getElementById('selectorcolor')

selectorcolor.addEventListener('input', e => {
  let background = document.getElementById('background')
  background.style.background = e.target.value
})
//