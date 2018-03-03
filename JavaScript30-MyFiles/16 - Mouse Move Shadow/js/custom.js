const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //PX, DEVIATION FROM CENTRE

function shadow(e){
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    // ES6 METHOD
    //const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    // IF THE TRIGGERING EVENT IS NOT THE SAME AS THE hero VARIABLE ADD OFFSETS TO POSITION
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // 100: 50 max -50
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    console.log(xWalk, yWalk);
    
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red,
                             ${xWalk * -1}px ${yWalk * -1}px 0 blue,
                             ${xWalk * -1}px ${yWalk}px 0 yellow,
                             ${xWalk}px ${yWalk * -1}px 0 green`;
};

hero.addEventListener('mousemove', shadow);