const pressed = [];
const secret = 'wesbos';


window.addEventListener('keyup', (e) => {
    
    pressed.push(e.key);
    console.log(pressed);

    // USE NEGITIVE TO START FROM END COUNTING BACK
    console.log(`Array: ${pressed.length} - Secret: ${secret.length}: ${pressed.length - secret.length}`);
    pressed.splice(-secret.length - 1, pressed.length - secret.length);
    //console.log(pressed.join(''));

    if(pressed.join('').includes(secret)){
        console.log('Yay');
        cornify_add();
    }
 


});