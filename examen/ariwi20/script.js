// Referente sacado de solemne 2 ariwi20 https://github.com/ariwi20/dis9005-2023-1/tree/main/solemne-02/ariwi20

console.log("probando");
let martha = document.getElementById("myBtn");
console.log(martha);

// al apretar el botón aparecerá una alerta
document.getElementById("myBtn")
.addEventListener("click", function () {
alert("Al que madruga dios lo ayuda, o en este caso, consigue un pokemón -Profesor Oak");
});

martha.addEventListener("myBtn", cambiarColor);
function cambiarColor() {
console.log("probando");
}
// Al apretar el botón este cambiará de color a azul y el texto
const btn = document.getElementById('myBtn');
btn.addEventListener('click', function onClick() {
btn.style.backgroundColor = '#0075BE';
btn.style.color = 'white';
});
