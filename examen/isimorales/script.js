// // window.onload = function () {
//     var imagen = document.getElementById("imagen");
//     imagen.addEventListener('mouseover', cambiarImagen);
//     imagen.addEventListener('mouseout', imagenIniciar);

//     function cambiarImagen() {
//         this.setAttribute('src', 'https://image.shutterstock.com/display_pic_with_logo/3016328/368581601/stock-photo-computer-key-showing-the-word-html-368581601.jpg');
//     }

//     function imagenIniciar() {
//         this.setAttribute('src', "https://pixabay.com/static/uploads/photo/2014/07/07/10/22/html-386093__180.jpg");
//     }


console.log("profe no le dedique tanto tiempo al javascript, dedique ma&acutes tiempo al css por que quiero hacer mi portafolio bonito"); //Mostrará el mensaje en forma de error, resaltado en rojo.



let day;
// codigo extraido de  https://www.w3schools.com/js/tryit.asp?filename=tryjs_switch
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;
