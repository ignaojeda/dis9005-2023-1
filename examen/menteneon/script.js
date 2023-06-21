console.log("hola")
const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".high-score");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let setIntervalId;
let score = 0;

let highScore = localStorage.getItem("high-score") || 0;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1; 
}

const handleGameOver = () => {
    clearInterval(setIntervalId); 
    alert("Perdiste :c");
    location.reload();
}

const changeDirection = (e) => {
    // console.log(Si);
    if(e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
   
    // initGame();
}

// 

const initGame = () => {
    if(gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    // fruta

    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([foodX, foodY]);
        // console.log(snakeBody);  
        // no funciona el movimiento 
        score++; 

        
    highScore = score >= highScore ? score : highScore;
    localStorage.setItem( );
    scoreElement.innerHTML = `Score: ${score}`;

    highscoreElement.innerHTML = `High Score: ${highScore}`;

    }

    for(let i =snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];

    snakeX += velocityX;
    snakeY += velocityY; // y = 10 - 1 = 9 

    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true; 
    }

    for(let i = 0; i < snakeBody.length; i++){
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`; 
        if( i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true; 

        }
    }


    // serpiente cabeza
    playBoard.innerHTML = htmlMarkup;
}

changeFoodPosition();
// initGame(); 
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
// codigo del juego rescatado de https://www.youtube.com/watch?v=QIKOrITyAtU


