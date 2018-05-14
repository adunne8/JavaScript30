const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
let defaultInterval = 600;

function getVideo(){
    // USER PROMPT TO ACCESS MEDIA, RETURNS PROMICE RESOLVING TO MediaStream
    navigator.mediaDevices.getUserMedia({video: true, Audio: false})
        // IS A 'PROMICE' SO THEN USED
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(error => {
            console.error("Failed: " + error);
        });
};

function paintToCanvas(intervalTimer){
    if(!intervalTimer){
        intervalTimer = defaultInterval;
    }

    // MUST BE PLAYING BEFORE DIMS SET
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    // USE RETURN TO HAVE ACCESS TO STOP THE INTERVAL
    console.log(`Interval Timing: ${intervalTimer}`)
    return setInterval(() => {
        // SOURCE, STARTX, STARTY, ENDX, ENDY
        ctx.drawImage(video, 0, 0, width, height);
        // TAKE THE PIXELS OUT
        let pixels = ctx.getImageData(0, 0, width, height);
        // RUN ALTERATION FUNCTION(s)
        //pixels = redEffect(pixels);
        //pixels = rgbSplit(pixels);

        // BASICALLY PUTTING TRANSPARENT IMAGES ON TOP OF EACH THER
        //ctx.globalAlpha = 0.1;

        greenScreen(pixels);

        // PRINT THEM BACK OUT
        ctx.putImageData(pixels, 0, 0);
    }, intervalTimer)
}


function takePhoto(){
    // SOUND
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    // CREATE A LINK AND SET ATTRIBUTES
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'hadsome');
    link.innerHTML = `<img src="${data}" alt="handsome">`;
    strip.insertBefore(link, strip.firstChild);


}


function redEffect(pixels){
    // +4 FOR RGBA VALUES PER PIXEL 
    for(let i = 0; i < pixels.data.length; i+= 4){
        pixels.data[i] = pixels.data[i] - 100;          // RED
        pixels.data[i + 1] = pixels.data[i + 1] -50;    // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] *.5;    // BLUE

    }
    return pixels;
}

function rgbSplit(pixels){
    // +4 FOR RGBA VALUES PER PIXEL 
    for(let i = 0; i < pixels.data.length; i+= 4){
        pixels.data[i + 150] = pixels.data[i + 0];          // RED
        pixels.data[i + 300] = pixels.data[i + 1];    // GREEN
        pixels.data[i + 500] = pixels.data[i + 2];    // BLUE

    }
    return pixels;
}

function greenScreen(pixels){
    // HOLD MIN AND MAX GREEN VALUE RANGE TO REMOVE
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });

    console.log(levels);

    for (let i = 0; i < pixels.data.length; i += 4){

        red =   pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue =  pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if(     red >= levels.rmin
            &&  red <= levels.rmax
            &&  green >= levels.gmin
            &&  green <= levels.gmax
            &&  blue >= levels.bmin
            &&  blue <= levels.bmax){
                // SET TRANSPARENCY VALUE TO 0
                pixels.data[i + 3] = 0;
        };

    }

}

getVideo();

// ONCE THE VIDEO IS OUTPUTTING
video.addEventListener('canplay', paintToCanvas);