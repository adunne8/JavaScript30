const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const triggerButton = document.querySelector('.game_start');

let lastHole;
let timeUp = false;
let score = 0;


function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if(hole == lastHole){
        return randomHole(holes);
    }

    lastHole = hole;
    return hole;

}

function peep(){
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp){
            peep();
        }
    }, time);
}

function bonk(e){
    if(!e.isTrusted) return;
    score++;
    this.parentElement.classList.remove('up');
    scoreBoard.textContent = score;
}

function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    peep();
    score = 0;
    setTimeout(()=> {
        timeUp = true;
    }, 10000);

}

moles.forEach(mole => mole.addEventListener('click', bonk));
triggerButton.addEventListener('click', startGame);