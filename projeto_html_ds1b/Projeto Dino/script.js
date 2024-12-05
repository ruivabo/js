// Seleciona o elemento HTML com a classe 'dino' e o armazena na constante 'dino'
const dino = document.querySelector('.dino');
// Variável que indica se o dinossauro está no meio de um salto
let isJumping = false;
// Variável que armazena a posição vertical do dinossauro
let position = 0;

// Função que lida com o evento de pressionar uma tecla
function handleKeyUp(event) {
    // Verifica se a tecla pressionada é a barra de espaço (código 32)
    if (event.keyCode === 32) { 
        // Verifica se o dinossauro não está no meio de um salto
        if (!isJumping) {
            // Inicia o salto
            jump();
        }
    }
}

// Função que controla o movimento de salto do dinossauro
function jump() {
    // Define isJumping como true para indicar que o dinossauro está pulando
    isJumping = true;

    // Inicia um intervalo para fazer o dinossauro subir
    let upInterval = setInterval(() => {
        // Verifica se o dinossauro atingiu a altura máxima do salto
        if (position >= 150) { 
            // Para o intervalo de subida
            clearInterval(upInterval);

            // Inicia um intervalo para fazer o dinossauro descer
            let downInterval = setInterval(() => {
                // Verifica se o dinossauro atingiu o chão
                if (position <= 0) {
                    // Para o intervalo de descida
                    clearInterval(downInterval);
                    // Define isJumping como false para permitir um novo salto
                    isJumping = false; 
                } else {
                    // Diminui a posição para simular a descida
                    position -= 20;
                    // Atualiza a posição vertical do dinossauro
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            // Aumenta a posição para simular a subida
            position += 20;
            // Atualiza a posição vertical do dinossauro
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

// Adiciona um ouvinte de evento ao documento para detectar quando uma tecla é pressionada
document.addEventListener('keyup', handleKeyUp);

function creatCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
let randomTime = Math.random() * 7000;

if (isGameOver) return;

cactus.classList.add('cactus');
background.appendChild(cactus);
cactus.style.left = cactusPosition + 'px';

let leftTimer = setInterval(() =>{
    if (cactusPosition < -60){
        clearInterval(leftTimer);
        background.removeChild(cactus);
    }else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
        clearInterval(leftTimer);
        isGameOver =true;
        document.body.innerHTML= '<h1 class = "game-over"> Fim de Jogo </h1>'
    } else {
        cactusPosition -=10;
        cactus.style.left = cactusPosition + 'px';
    }
}, 20);
setTimeout(creatCactus, randomTime);
}
 creatCactus();
 document.addEventListener('keypress', handleKeyUp);
