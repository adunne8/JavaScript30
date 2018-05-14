
function playSound(e){
  // SET THE autio CONST TO THE AUDIO ELEMENT WITH THE RELEAVNT keyCode
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  //ALT METHOD WITHOUT BACKTICKS
  //const audio1 = document.querySelector("audio[data-key='" + e.keyCode + "']");
  //console.log(audio1);

  //STOP FUNCTION IF NO AUDIO ELEMENT
  if(!audio){
    return;
  }
  // STOP FURRENT PLAYING OF THIS AUDIO ELEMENT AND PLAY
  audio.currentTime = 0;
  audio.play();

  // ADD CLASS TO THE PRESSED KEY ONSCREEN
  key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

function removeTransition(e){
  if(e.propertyName !== 'transform'){
    return;
  }
  console.log(e.propertyName);
  // THIS IS WHAT CALLED THE FUNCTION I.E. THE KEY FROM THE ARRAY LIST
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
