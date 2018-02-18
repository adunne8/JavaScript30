const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let shiftActive = false;
let lastChecked = 0;

console.log(checkboxes);

function checkAll(e) {
    console.clear();

    var nodeArray = Array.prototype.slice.call(checkboxes); // Now it's an Array.

    if (shiftActive === true) {
        //checkboxes.forEach(checkbox => checkbox.checked = 'true');
        //console.log(this.nodeList[index]);
        console.log("Node");
        console.log(checkboxes);
        //arr.forEach(checkbox => {
                    //checkbox.checked = true;
            let endCheck = nodeArray.indexOf(this);

            if (endCheck > lastChecked){
                console.log("endCheck greater");
                for (let i = lastChecked; i <= endCheck; i++){
                    nodeArray.indexOf(i).checked = true;
                }
            }
            
            else{
                console.log("endCheck lesser");
                for (let i = lastChecked; i >= endCheck; i--){
                    checkboxes.item(i).checked = true;
                }
            }

            /*
            if(checkbox.checked === false){
                checkbox.checked = true;
            }
            else{
                checkbox.checked = false;
            }
            */
            
        //});
    }
    lastChecked = nodeArray.indexOf(this);

    console.log(`shiftActive: ${shiftActive}`);
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkAll));

// ACTIATE THE SHIFT FUNCTIONALITY
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 16) {
        shiftActive = true;
    }

});

window.addEventListener('keyup', (e) => {
    if (e.keyCode === 16) {
        shiftActive = false;
    }
});