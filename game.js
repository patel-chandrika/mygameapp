// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');

// const cellSize = 20;
// const width = canvas.width / cellSize;
// const height = canvas.height / cellSize;

// let snake = [{ x: 5, y: 5 }];
// let food = { x: 10, y: 10 };
// let direction = 'RIGHT';
// let newDirection = 'RIGHT';
// let isGameOver = false;
// let score = 0;

// document.addEventListener('keydown', changeDirection);
// setInterval(gameLoop, 100);

// function gameLoop() {
//     if (isGameOver) return;

//     direction = newDirection;
//     updateSnakePosition();
//     checkCollisions();
//     if (!isGameOver) {
//         drawGame();
//     }
// }

// function updateSnakePosition() {
//     const head = { ...snake[0] };

//     switch (direction) {
//         case 'UP':
//             head.y -= 1;
//             break;
//         case 'DOWN':
//             head.y += 1;
//             break;
//         case 'LEFT':
//             head.x -= 1;
//             break;
//         case 'RIGHT':
//             head.x += 1;
//             break;
//     }

//     snake.unshift(head);

//     if (head.x === food.x && head.y === food.y) {
//         score += 10;
//         spawnFood();
//     } else {
//         snake.pop();
//     }
// }

// function changeDirection(event) {
//     switch (event.key) {
//         case 'ArrowUp':
//             if (direction !== 'DOWN') newDirection = 'UP';
//             break;
//         case 'ArrowDown':
//             if (direction !== 'UP') newDirection = 'DOWN';
//             break;
//         case 'ArrowLeft':
//             if (direction !== 'RIGHT') newDirection = 'LEFT';
//             break;
//         case 'ArrowRight':
//             if (direction !== 'LEFT') newDirection = 'RIGHT';
//             break;
//     }
// }

// function checkCollisions() {
//     const head = snake[0];

//     if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
//         isGameOver = true;
//         alert('Game Over! Your score: ' + score);
//     }

//     for (let i = 1; i < snake.length; i++) {
//         if (snake[i].x === head.x && snake[i].y === head.y) {
//             isGameOver = true;
//             alert('Game Over! Your score: ' + score);
//         }
//     }
// }

// function spawnFood() {
//     food = {
//         x: Math.floor(Math.random() * width),
//         y: Math.floor(Math.random() * height)
//     };
// }
// function drawGame() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw snake as arrows
//     ctx.fillStyle = 'white';
//     snake.forEach(part => {
//         ctx.fillRect(part.x * cellSize, part.y * cellSize, cellSize, cellSize);
//     });

//     // Draw food as a red circle
//     ctx.fillStyle = 'red';
//     ctx.beginPath();
//     ctx.arc(food.x * cellSize + cellSize / 2, food.y * cellSize + cellSize / 2, cellSize / 2, 0, Math.PI * 2);
//     ctx.fill();

//     // Draw score
//     ctx.fillStyle = 'black';
//     ctx.font = '16px Arial';
//     ctx.fillText('Score: ' + score, 10, 20);
// }

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let cellSize = 20;
let width = canvas.width / cellSize;
let height = canvas.height / cellSize;
let snake = [{ x: 5, y: 5 }];
let food = { x: 10, y: 10 };
let direction = 'RIGHT';
let newDirection = 'RIGHT';
let isGameOver = false;
let score = 0;

function resizeCanvas() {
    // Make the canvas width and height dynamic to the screen size
    if (window.innerWidth <= 760) {
        canvas.width = window.innerWidth - 40;  // add padding/margin
        canvas.height = window.innerHeight - 100;  // subtract space for score
        cellSize = 15;  // Adjust the cell size for smaller screens
    } else {
        canvas.width = 600;
        canvas.height = 400;
        cellSize = 20;
    }
    width = canvas.width / cellSize;
    height = canvas.height / cellSize;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();  // Call it once to set the initial size

document.addEventListener('keydown', changeDirection);
setInterval(gameLoop, 100);

function gameLoop() {
    if (isGameOver) return;

    direction = newDirection;
    updateSnakePosition();
    checkCollisions();
    if (!isGameOver) {
        drawGame();
    }
}

function updateSnakePosition() {
    const head = { ...snake[0] };

    switch (direction) {
        case 'UP':
            head.y -= 1;
            break;
        case 'DOWN':
            head.y += 1;
            break;
        case 'LEFT':
            head.x -= 1;
            break;
        case 'RIGHT':
            head.x += 1;
            break;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        spawnFood();
    } else {
        snake.pop();
    }
}

function changeDirection(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (direction !== 'DOWN') newDirection = 'UP';
            break;
        case 'ArrowDown':
            if (direction !== 'UP') newDirection = 'DOWN';
            break;
        case 'ArrowLeft':
            if (direction !== 'RIGHT') newDirection = 'LEFT';
            break;
        case 'ArrowRight':
            if (direction !== 'LEFT') newDirection = 'RIGHT';
            break;
    }
}

function checkCollisions() {
    const head = snake[0];

    if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
        isGameOver = true;
        alert('Game Over! Your score: ' + score);
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            isGameOver = true;
            alert('Game Over! Your score: ' + score);
        }
    }
}

function spawnFood() {
    food = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
    };
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake as squares
    ctx.fillStyle = 'white';
    snake.forEach(part => {
        ctx.fillRect(part.x * cellSize, part.y * cellSize, cellSize, cellSize);
    });

    // Draw food as a red circle
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(food.x * cellSize + cellSize / 2, food.y * cellSize + cellSize / 2, cellSize / 2, 0, Math.PI * 2);
    ctx.fill();

    // Draw score
    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.fillText('Score: ' + score, 10, 20);
}
