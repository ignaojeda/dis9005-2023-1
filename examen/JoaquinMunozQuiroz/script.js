//Log de la consola para ver que efectivamente funciona el Js, aparte de un dato
console.log("Como dato curioso, Tarrabah está inspirado en un demonio de Tasmania, por eso su semejanza con el arma dentro del juego y el como opera dentro del mismo, teniendo la habilidad de 'The Ravenous Beast', por el comportamiento del animal")

//Puse todas las variabe Let para que funcionase, por lo que sabia de mi entrega anteriores y lo poco que logre en p5.js, es más ordenado ponerlos en la parte de arriba del Js
let registrarseBtn = document.getElementById("registrarseBtn");
let iniciarBtn = document.getElementById("iniciarBtn");
let espacioNombre = document.getElementById("espacioNombre");
let title = document.getElementById("title");

//Fue interesante ver la funcion "classList" y lo util que podria ser, en este caso lo que esta haciendo es cambiar y devolver lo estilos de css originales
//Sin estas lineas de codigo por ejemplo no se podria volver al estado original del form, la unica solucion sin esto es volver a cargar la pagina
iniciarBtn.onclick = function () {
    espacioNombre.style.maxHeight = "0"
    title.innerHTML = "Iniciar Sesión";
    registrarseBtn.classList.add("disable");
    iniciarBtn.classList.remove("disable");
}

//Basciamente lo mismo que arriba pero para el otro boton y no tener que reiniciar la pagina para que vuelva a su estado original, saque toda la info de w3school https://www.w3schools.com/jsref/prop_element_classlist.asp y videos tutoriales 
registrarseBtn.onclick = function () {
    espacioNombre.style.maxHeight = "60px"
    title.innerHTML = "Regístrate a Ishtar Collective";
    registrarseBtn.classList.remove("disable");
    iniciarBtn.classList.add("disable");
}