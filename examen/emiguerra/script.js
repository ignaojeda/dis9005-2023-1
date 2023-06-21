// Agregar interactividad a un botón
const boton = document.getElementById('miBoton');
boton.addEventListener('click', function() {
  alert('¡Has hecho clic en el botón!');
});

// Validación de formulario al enviar
const formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Validar campos requeridos
  const campoNombre = document.getElementById('nombre');
  const campoEmail = document.getElementById('email');

  if (campoNombre.value === '' || campoEmail.value === '') {
    alert('Por favor, completa todos los campos requeridos.');
    return;
  }

  // Validar formato de correo electrónico
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(campoEmail.value)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  // Si la validación es exitosa, puedes enviar el formulario al servidor aquí
  alert('¡El formulario ha sido enviado exitosamente!');
});

// sacado de w3schools
const elemento = document.getElementById('miElemento');
elemento.textContent = 'Nuevo texto'; // Cambiar el texto del elemento

const otroElemento = document.getElementById('otroElemento');
otroElemento.style.display = 'none'; // Ocultar el elemento

const nuevoElemento = document.createElement('p');
nuevoElemento.textContent = 'Este es un nuevo párrafo.';
document.body.appendChild(nuevoElemento); // Agregar un nuevo elemento al documento

// codigo responsivo
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Utilizar los datos obtenidos para actualizar el contenido de la página
    console.log(data);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
var elements = document.getElementsByClassName('column');
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = '100%'; // IE10
    elements[i].style.flex = '100%';
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = '50%'; // IE10
    elements[i].style.flex = '50%';
  }
}

// aqui van cuatro imagenes una al lado de otra
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = '25%'; // IE10
    elements[i].style.flex = '25%';
  }
}

// para el destacado
var header = document.getElementById('myHeader');
var btns = header.getElementsByClassName('btn');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
