// CREATES NODELIST RATHER THAN ARRAY, LIMITED FUNCTIONS/proto ENTRIES
const inputs = document.querySelectorAll('.controls input');
console.log(inputs);


function handleUpdate(){
  // DATASET IS OBJECT OF ALL data- ATTRBUTES ON ELEMENT
  const suffix = this.dataset.sizing || '';
  console.log(suffix);
  
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);


}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
