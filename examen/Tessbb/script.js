// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top boton que hace que la pagina suba hasta el inicio


let desplazarse = document.getElementById("botonSubir");

// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = function() {FuncionDesplazarse()};

function FuncionDesplazarse() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    desplazarse.style.display = "block";
  } else {
    desplazarse.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function subir() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_hover_tabs tabla qeu cambia al posarse encima


function miembros(evt, posisiones) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(posisiones).style.display = "block";
  evt.currentTarget.className += " active";
}

// en el java script hay elementos que podria haber cambiado, pero no los cambie por que no quise romper el codigo

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_console_log mensaje en la consola

console.log ("Por si acaso SHINee es un grupo de kpop");

