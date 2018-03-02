const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// LOAD LOCAL STORAGE AND IF NOT PRESENT SET AS EMPTY ARRAY
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    // STOP THE FORM SUBMISSION ACTION
    e.preventDefault();

    // NARROW SEARCH WITHIN THE FORM
    const text = this.querySelector('[name=item]').value;
    console.log(text);
    
    const item = {
        text: text,
        done: false
    };


    items.push(item);
    populateList(items, itemsList);
    // ADD TO OCAL STORAGE
    localStorage.setItem('items', JSON.stringify(items));

    // FORM RESET TO CLEAR INPUT
    this.reset();

}
// SET ITEM TO ARRAY IF NOTHING PASSED IN TO PREVENT BREAKING
// ITEM ARRAY TO ADD< ELEMENT TO EXPORT TO
function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i ) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e){
    if(!e.target.matches('input')) return; // SKIP UNLESS ITS THE DESIRED input ELEMENT

    const el = e.target;
    const index = el.dataset.index;

    items[index].done = !items[index].done;

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);

    console.log(e);
};

// NOT JUST CLICKING BUT ENTER AND OTHER EVENTS ARE COVERED BY SUBMIT
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

// POPULATE FROM LOCAL STORAGE DATA
populateList(items, itemsList);