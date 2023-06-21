function funcion(imgs) {
    let expandir = document.getElementById("expandida");
    let textoImg = document.getElementById("textoImg");
    expandir.src = imgs.src;
    textoImg.innerHTML = imgs.alt;
    expandir.parentElement.style.display = "block";
}

// ver el tema del style.display

var input = document.getElementById("info");
input.addEventListener("keypress", function(event) {
    if (event.key == "enter") {
        event.preventDefault();
        document.getElementById("enviar").click;
    }
});
// alerta al registrarse https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
let fila = document.querySelectorAll(".fila")
