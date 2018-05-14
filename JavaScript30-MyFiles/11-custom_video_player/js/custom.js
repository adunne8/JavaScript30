// GET ELEMENTS
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
//const toggle = player.querySelectorAll('.toggle');
const toggle = player.querySelector('.toggle');
const play = player.querySelector('.play');
const pause = player.querySelector('.pause');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('input[type="range"]');
const fullscreen = document.getElementById('fullscreen');

console.log(fullscreen);

let rangeActive = false;

//BUILD FUNCTIONS
function togglePlay(){
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}

// SWITCH PLAY PAUSE ICON
function updateButton(e){
    const icon = this.paused ? "&#9658;" : "&#9616;&#9616"; 
    toggle.innerHTML = icon;
    console.log(icon);
    console.log(e.type);
}


function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    if(!rangeActive){

        return;
    }
    console.log(`Name: ${this.name}, value: ${this.value}`);

    video[this.name] = this.value;

}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;

    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;
}

function fullscreenTrigger(){
    video.requestFullscreen();
}

// EVENT LISTENERS
//toggle.forEach(toggles => toggles.addEventListener('click', togglePlay));
toggle.addEventListener('click', togglePlay);

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click', scrub);
//  CHECK rangeActive IS TRUE RUN SCRUB 
progress.addEventListener('mousemove', (e) => rangeActive && scrub(e));

fullscreen.addEventListener('click', fullscreenTrigger);

document.addEventListener('mousedown', ()=> rangeActive = true);
document.addEventListener('mouseup', ()=> rangeActive = false);
document.addEventListener('mouseup', ()=> console.log('mouseup'));