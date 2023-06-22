console.log("Hola examen tratame bien");
console.log("ancho: " + window.innerWidth);
// como cambiar el tamaño y color de los textos sin cambiar el css a continuacion
document.getElementById("personaje").style.color = "white";
document.getElementById("personaje").style.fontSize = "25px";
document.getElementById("personaje").style.fontFamily = "inherit";
// importante agregar id dentro del texto que quiera editar para que sea encontrado dentro del js

let formulario = document.getElementById("formulario");
console.log(formulario);

 function validateForm() {
    var x = document.forms["personajefav"]["fname"].value;
    if (x == "" || x == null) {
      alert("NO HAZ ESCRITO TU PERSONAJE FAVORTIO");
      return false;
    }
  }
//   intente linkear a algunas respuestas algunas paginas pero no pude:(
    // y no pude profundizar tanto en el js porque profundice mas en el css
