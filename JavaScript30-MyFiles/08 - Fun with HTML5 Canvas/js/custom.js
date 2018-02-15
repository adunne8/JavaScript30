const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
const colorblocks = document.querySelectorAll('.colorblock');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
  if(!isDrawing) return; //STOP FUNCTION IF NOT DRAWING

  // SET COLOR
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  // START FROM
  context.moveTo(lastX, lastY);
  // MOVE TO
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  // RESET HUE IF OVER LIMIT
  hue++;
  if (hue >= 360){
    hue = 0;
  };

  //CHECK IF DIRECTION NEEDS TO REVERSE
  if(context.lineWidth >= 100 || context.lineWidth <= 1){
    direction = !direction;
  }
  // INCREMENT OR DECREMENT LINE WIDTH
  if(direction){
    context.lineWidth++;
  }
  else{
    context.lineWidth--;
  }

  //lastX = e.offsetX;
  //lastY = e.offsetY;

  [lastX, lastY] = [e.offsetX, e.offsetY];
  context.clear();

}

function setColor(){
  var style = getComputedStyle(this);
  console.log(style.getPropertyValue('background-color'));
}

canvas.addEventListener('mousedown', (e)=>{
  [lastX, lastY] = [e.offsetX, e.offsetY];
  isDrawing = true
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=> isDrawing = false);
canvas.addEventListener('mouseout', ()=> isDrawing = false);

colorblocks.forEach(colorblock => colorblock.addEventListener('click', setColor));
