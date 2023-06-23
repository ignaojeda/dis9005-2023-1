const getRemainTime = deadline => {
    let now = new Date (),
        remainTime = (new Date (deadline) - now + 1000) / 1000;
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
        remainDays = Math.floor(remainTime / (3600 * 24));

return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays
}
};

const countdown = (deadline, elem, finaleMessage) => {
    const el = document.getElementById(elem);


    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finaleMessage;
        }
    }, 1000)
};

countdown('Sun Jul 02 2023 09:00:00 GMT-0400', 'clock', 'LA CARRERA HA COMENZADO');

// codigo referente https://youtu.be/ZbF5qomB8XM  //




var box = document.getElementById('box');
var papel = box.getContext('2d');

/* declaracion de variables la variable estado es para verificar si el mouse esta en movimiento */
var estado= false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    punto = false;

var x = "black",
    y = 2;


    box.addEventListener("mousemove", function (e) {
        encontrarxy('move', e)
    }, false);
    box.addEventListener("mousedown", function (e) {
        encontrarxy('down', e)
    }, false);
    box.addEventListener("mouseup", function (e) {
        encontrarxy('up', e)
    }, false);
    box.addEventListener("mouseout", function (e) {
        encontrarxy('out', e)
    }, false);

    // funcion para dibujar los pixeles.

    function dibujar() {
        papel.beginPath();
        papel.moveTo(prevX, prevY);
        papel.lineTo(currX, currY);
        papel.strokeStyle = x;
        papel.lineWidth = y;
        papel.stroke();
        papel.closePath();
    }

    // funcion para encontrar el punto donde esta el mouse

    function encontrarxy(res, e) {
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - box.offsetLeft;
            currY = e.clientY - box.offsetTop;

            estado = true;
            punto = true;
            if (punto) {
                papel.beginPath();
                papel.fillStyle = x;
                papel.fillRect(currX, currY, 2, 2);
                papel.closePath();
                punto = false;
            }
        }
        if (res == 'up' || res == "out") {
            estado = false; // si se levanta el click del mouse pasa a false
        }
        if (res == 'move') {
            if (estado) { // si el mouse se mueve esta en true y se ejecuta la funcion dibujar
                prevX = currX;
                prevY = currY;
                currX = e.clientX - box.offsetLeft;
                currY = e.clientY - box.offsetTop;
                dibujar();
            }
        }
    }
