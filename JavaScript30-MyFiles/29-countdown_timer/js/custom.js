const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');



let countdown;



function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    clearInterval(countdown);

    console.log({now, then});

    countdown = setInterval(() => {
        // TAKING THE TARGET TIME then AND SUBTRACTING THE TIME NOW Date.now()
        const secondsLeft = Math.round((then - Date.now())/ 1000);
        // CHECK IF DONE
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        // DISPLAY IT
        displayTimeLeft(secondsLeft);
    }, 1000);

    
}

function displayTimeLeft(seconds){
    let minutes = Math.floor(seconds/60);
    let remainderSeconds = seconds % 60;

    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    // UPDATE THE TAB
    document.title = `Time Left: ${display}`;

    timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minute = end.getMinutes();

    endTime.textContent = `Be back at: ${hour > 12 ? hour - 12 : hour}:${minute < 10 ? '0' : ''}${minute}`;

}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();


});