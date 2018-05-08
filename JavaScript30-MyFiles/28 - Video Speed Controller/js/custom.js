const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');


function check(e){
    const y = e.pageY - this.offsetTop;
    const percent = y/this.offsetHeight;

    // MIN AND MAX VOLUME
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    bar.style.height = height;

    const playbackRate = percent * (max - min) + min;
    bar.textContent = playbackRate.toFixed(2) + 'x';

    video.playbackRate = playbackRate;

}

/*
speed.addEventListener('mousemove', function(e){
    console.log("int");

    console.log({e});
    console.log(this);
    console.log(this.offsetTop);
});
*/
speed.addEventListener('mousemove', check);