const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const unitSize = 20; // Tamanho de cada unidade (quadrado)
canvas.width = 550; // Largura do jogo
canvas.height = 550; // Altura do jogo

let snake = [{ x: 200, y: 200 }]; // Cobra começa no meio
let food = { x: 100, y: 100 }; // Comida inicial
let dx = unitSize; // Movimento horizontal
let dy = 0; // Movimento vertical

function drawSnake() {
ctx.fillStyle = 'purple';
snake.forEach(part => {
ctx.fillRect(part.x, part.y, unitSize, unitSize);
});
}

function drawFood() {
ctx.fillStyle = 'blue';
ctx.fillRect(food.x, food.y, unitSize, unitSize);
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head); // Adiciona uma nova cabeça
    
    // Verifica se comeu a comida
    if (head.x === food.x && head.y === food.y) {
    generateFood(); // Gera uma nova comida
    
    } else {
    snake.pop(); // Remove a cauda
    }
    }
    
    function checkCollision() {
    // Colisão com paredes
    if (
    snake[0].x < 0 ||
    snake[0].x >= canvas.width ||
    snake[0].y < 0 ||
    snake[0].y >= canvas.height
    ) {
    return true;
    }
    
    // Colisão com o próprio corpo
    for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
    return true;
    }
    }
    return false;
    }

    function generateFood() {
        food.x = Math.floor(Math.random() * (canvas.width / unitSize)) * unitSize;
        food.y = Math.floor(Math.random() * (canvas.height / unitSize)) * unitSize;
        
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowUp' && dy === 0) {
            dx = 0;
            dy = -unitSize;
            } else if (event.key === 'ArrowDown' && dy === 0) {
            dx = 0;
            dy = unitSize;
            } else if (event.key === 'ArrowLeft' && dx === 0) {
            dx = -unitSize;
            dy = 0;
            } else if (event.key === 'ArrowRight' && dx === 0) {
            dx = unitSize;
            dy = 0;
            }
            });

            function gameLoop() {
                if (checkCollision()) {
                alert('Game Over!');
                document.location.reload();
                }
                
                setTimeout(() => {
                
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
                drawFood();
                moveSnake();
                drawSnake();
                gameLoop();
                }, 200);
                }
                
                generateFood();
                gameLoop();
                
                /* Centraliza o canvas na tela */
                