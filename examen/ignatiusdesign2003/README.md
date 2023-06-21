examen

para este examen me basare en la entrga de la solemne 2, donde mejorare aspectos del java script en los que elementos como la barra para ingresar caracteres y que cuando se haga click pase algo y nos redirija a otra ventana nueva, dejo aqui su codigo:


<!DOCTYPE html>
<html>
<head>
<script>
function confirmInput() {
  fname = document.forms[0].fname.value;
  alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");
}
</script>
</head>
<body>

<form onsubmit="confirmInput()" action="https://www.w3schools.com/">
  Enter your name: <input id="fname" type="text" size="20">
  <input type="submit">
</form>

</body>
</html>

Tambien mas variedad de elementos e interaccion con estos, como que una imagen se sacuda cuando se le hace zoom:

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
img:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
</head>
<body>

<p>Hover over the image:</p>
<img width="2048" alt="Captura de pantalla 2023-06-19 a la(s) 12 48 53" src="https://github.com/ignatiusdesign2003/dis9005-2023-1/assets/128399461/c8cd501c-8255-47d9-a03a-66702e75108f">


<img src="pineapple.jpg" alt="Pineapple" width="300" height="300">

</body>
</html>
