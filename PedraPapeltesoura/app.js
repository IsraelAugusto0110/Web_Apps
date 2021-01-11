let userScore = 0, compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");

const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


/*Gera uma escolha aleatoria do computador*/
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter == 'r') {
        return 'pedra';
    }
    if(letter == 'p') {
        return 'papel';
    }
    if(letter == 's') {
        return 'tesoura';
    }
}

/** caso usuario venca */
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "usuario".fontsize(3).sub();
    const smallCompWord = "computador".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} vence ${convertToWord(computerChoice)}${smallCompWord}. Você ganhou!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 1500);
}


/** caso computador vença */
function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "usuario".fontsize(3).sub();
    const smallCompWord = "computador".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perde de ${convertToWord(computerChoice)}${smallCompWord}. Você perdeu.`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 1500);
}

/** empate */
function draw(userChoice, computerChoice) {
    const smallUserWord = "usuario".fontsize(3).sub();
    const smallCompWord = "computador".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} é igual a ${convertToWord(computerChoice)}${smallCompWord}. Empate.`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        /** usuario ganha */
        case 'pr':
        case 'rs':
        case 'sp':
            win(userChoice, computerChoice);
            break;

        /** computador ganha */
        case 'rp':
        case 'sr':
        case 'ps':
            lose(userChoice, computerChoice);
            break;
        
        /** empate */
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });
    
    paper_div.addEventListener('click', function () {
        game("p");
    });
    
    scissor_div.addEventListener('click', function () {
        game("s");
    });
}



main();

