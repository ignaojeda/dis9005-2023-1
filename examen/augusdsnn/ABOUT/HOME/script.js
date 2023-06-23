//Javascript hecho en conjunto con ChatGPT//
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    var colors = ['#EFF2FF', '#dbacdc', '#ac9ac8', '#ecc2a2'];
    var colorIndex = Math.floor(scrollPosition / 1000);
    var colorStart = colors[colorIndex];
    var colorEnd = colors[colorIndex + 1] || colors[colors.length - 1];
    var progress = (scrollPosition % 1000) / 1000; 

    var redStart = parseInt(colorStart.slice(1, 3), 16);
    var greenStart = parseInt(colorStart.slice(3, 5), 16);
    var blueStart = parseInt(colorStart.slice(5, 7), 16);

    var redEnd = parseInt(colorEnd.slice(1, 3), 16);
    var greenEnd = parseInt(colorEnd.slice(3, 5), 16);
    var blueEnd = parseInt(colorEnd.slice(5, 7), 16);

    var red = Math.round(redStart + (redEnd - redStart) * progress);
    var green = Math.round(greenStart + (greenEnd - greenStart) * progress);
    var blue = Math.round(blueStart + (blueEnd - blueStart) * progress);

    document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
});
