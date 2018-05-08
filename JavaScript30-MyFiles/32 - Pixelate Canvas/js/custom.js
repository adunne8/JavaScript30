let canvas = document.querySelector('.canvas-pixelize');

const ctx = canvas.getContext('2d');
let img = new Image();

// imageSmoothing, true=blurred, false=pixelated
ctx.mozImageSmoothingEnabled = true;
ctx.webkitImageSmoothingEnabled = true;
ctx.imageSmoothingEnabled = true;

// wait until image is actually available
//img.onload = pixelate;
img.src = 'http://oi68.tinypic.com/2dm7fjt.jpg';
/*
img.onload = function(){

}
*/


function imgLoaded(){
    // SET WIDTH OF CANVAS BASED ON IMAGE DIMS
    canvas.width = img.width;
    canvas.height = img.height
    w = img.width; //* size,
    h = img.height; //* size
    
    // draw original image to the scaled size
    ctx.drawImage(img, 0, 0, w, h);
}



img.onload = imgLoaded;
