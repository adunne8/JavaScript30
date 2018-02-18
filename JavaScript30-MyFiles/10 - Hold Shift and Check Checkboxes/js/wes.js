const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;


console.log(checkboxes);

function handleCheck(e){
    // CHECK IF SHIFT HELD
    // AND THE CHECKBOX IS BEING CHECKED
    let inBetween = false;

    if (e.shiftKey /*&& this.checked*/){
        console.log("Running check function");
        
        // LOOP OVER EVERY CHECKBOX
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            
            // SET THE CHECKING INDICATOR ON OR OFF
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;

                console.log('Starting checking inbetween');
                
            }
            // IF CHECKING - ACTIVATE CHANGE
            if(inBetween && this.checked){
                checkbox.checked = true;
            }
            else if(inBetween && !this.checked){
                checkbox.checked = false;
            }
        });
    };


    /*
    if (e.shiftKey && !this.checked){
        console.log("Running check function");
        
        // LOOP OVER EVERY CHECKBOX
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            
            // SET THE CHECKING INDICATOR ON OR OFF
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;

                console.log('Starting checking inbetween');
                
            }
            // IF CHECKING - ACTIVATE CHANGE
            if(inBetween){
                checkbox.checked = false;
            }
        });
    };
    */



    lastChecked = this;

    console.log(lastChecked);
    
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));