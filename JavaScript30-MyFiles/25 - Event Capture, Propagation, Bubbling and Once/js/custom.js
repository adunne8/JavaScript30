const divs = document.querySelectorAll('div');
const button = document.querySelector('button');


function logText(e){

    console.log(this.classList.value);

    e.stopPropagation();//STOP BUBBLING
}




divs.forEach(div => div.addEventListener('click' , logText, {
    capture: false, //CAPTURE EVENTS TRAVELLING DOWN THE TREE
    once: true // DISABLE THE EVENT LISTENER AFTER RUNNING

}));

button.addEventListener('click', () => {
    console.log('Click');
}, {
    once: true
})