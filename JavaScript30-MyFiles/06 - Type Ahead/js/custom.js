const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// CONTAINER FOR THE EXTERNAL DATA
const cities = [];

// FETCH
// RETURNS PROMICE
// DATA, DOESNT KNOW WHAT THE DATA IS
// DATA IS JSON, BLOB NEEDS TO CONVERT TO JSON
// BLOB _PROTO_ HAS JSON METHOD ANOTHER PROMICE
fetch(endpoint)
  .then(blob => blob.json())
  //.then(data => console.table(data))
  // USE ES6 SPREAD TO AVOID AN ARRAY OF AN ARRAY
  // cities.push(data) WILL ADD A SINGLE ENTRY OF AN ARRAY - MULTIDIMENTIONAL ARRAY
  // cities.push(...data) WILL ADD EACH ARRAY ELEMENT AS ITS OWN ELEMENT - SINGLE DIMENTION ARRAY
  .then(data => cities.push(...data));
//const prom = fetch(endpoint);
//console.log(prom);

//console.log(cities);

function findMatches(wordToMatch, cities){
  return cities.filter(place => {
    // CHECK IF CITY/STATE MATCHES THE SEARCH TEXT
    // g = GLOBAL, i = UPPER or lower
    const regex = new RegExp(wordToMatch, 'gi');

    return place.city.match(regex) || place.state.match(regex);
  });
}


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}



function displayMatches(){
  const matchArray = findMatches(this.value, cities);
  //console.table(matchArray);
  const html = matchArray.map(place =>{
    const regex = RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  const html1 = matchArray.map(place =>{
    const regex = RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  });
  suggestions.innerHTML = html1.join('');

}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
