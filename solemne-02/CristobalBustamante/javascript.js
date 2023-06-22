console.log("Welcome to Mercy Howlett Portfolio");

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