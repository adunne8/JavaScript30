const checkboxes = document.querySelectorAll('input[type="checkbox"]');


console.log(checkboxes);

function checkAll(){
    console.log(this);
    
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkAll));