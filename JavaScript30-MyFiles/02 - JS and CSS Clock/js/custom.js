
function setDate(){

  // GET THE HANDS
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  // GET THE DATE AND SPLIT OUT INTO THREE PARTS
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();


  secondsDeg = ((seconds / 60) * 360 )+90;
  // FIX ISSUE WITH HAND JUMPING BACK TO START
  if (secondsDeg == 90){
    secondHand.style.transition = "all 0s";
    console.log("override transition");
  }
  else{
    secondHand.style.transition = "all .05s";
  }

  minutesDeg = ((minutes / 60) * 360 )+90;
  if (minutesDeg == 90){
    secondHand.style.transition = "all 0s";
    console.log("override transition");
  }
  else{
    secondHand.style.transition = "all .05s";
  }

  hoursDeg = ((hours / 24) * 360 )+90;
  if (hoursDeg == 90){
    secondHand.style.transition = "all 0s";
    console.log("override transition");
  }
  else{
    secondHand.style.transition = "all .05s";
  }

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
  console.log(secondsDeg);



}


setInterval(setDate, 1000);
