console.log("solemne2");

let trabajo = document.getElementById("trabajo");
console.log(trabajo);
trabajo.addEventListener("submit", grabarInfo);

function grabarInfo(event){
    event.preventDefault();
    let textoNombre = document.getElementById("textoNombre");
    textoNombre.innerHTML = "Bienvenide! " + nombre.value;
}
// lo siguiente son las acciones/funciones al hacer click del boton creado 
const btn = document.getElementById('MyBoton');
console.log(btn);
// me ayudo francisca wright para esta funcion
btn.addEventListener('click', function onClick (){
btn.style.backgroundColor = 'salmon'
btn.style.color = 'white'
console.log("inscrito!");
// https://www.freecodecamp.org/espanol/news/como-crear-un-mensaje-de-alerta-o-ventana-emergente-en-javascript/
window.alert("welcome to dunder mifflin paper company");
});