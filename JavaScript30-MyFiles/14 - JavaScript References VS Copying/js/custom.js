// START WITH STRINGS, NUMBERS AND BOOLEANS

console.log("Strings and numbers");
let age = 100;
let age2 = age;

console.log(age, age2);
age = 200
// ONLY CHANGES age - age2 NOT REFERENCING AGE
console.log(age, age2);

let name = 'wes';
let name2 = name;

console.log(name, name2);
name = 'wesley';
// SAME AS THE NUMBER EXAMPLE
console.log(name, name2);



// ARRAYS
console.log("ARRAYS");
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// ARRAY team IS REFERENCING players AND GETS UPDATED ACCORGINGLY 
const team = players;


// COPYING THE ARRAY WILL FIX THIS AS THE NEW ARRAY WONT BE REFERENCING THE OLD ONE
// MULTIPLE WAYS OF DOING THIS
const team2 = players.slice();
// CONCAT MERGES ARRAYS BY RETURNING A BRAND NEW ONE
const team3 = [].concat(players);
// ES6 FUNCTION
const team4 = [...players];

const team5 = Array.from(players);

console.log("Reassigning team[3] value results in:");
team[3] = 'lux';

console.log("players: " + players);
console.log("Team: " + team);
console.log("Team2: " + team2);
console.log("Team3: " + team3);
console.log("Team4: " + team4);
console.log("Team5: " + team5);


// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// ANOTHER REFERENCE ITEM
console.log("Added number to captain")
const captain = person;
captain.number = 90;

// START WITH BLANK OBJECT, PASS OBJECT TO COPY PEOPERTYS FROM, FOLD IN NEW PROPERTIES
const captain2 = Object.assign({}, person, {rank: 99});
// WORKS THE SAME AS SPREAD IN ARRAY - LIMITED SUPPORT
const captain3 = {...person};

console.log(person);
console.log(captain);
console.log(captain2);


const wes = {
    name: 'wes',
    age: 100,
    social: {
        twitter: "@wesbos",
        facebook: "wesbos.developer"
    }
}
console.log(wes);
// ASSIGN ONLY WORKS ONE LEVEL DEEP - NEED CLONE DEEP
const dev = Object.assign({}, wes);
console.log(dev);
// STRINGIFY CAN TAKE AN OBJECT IN AS A STRING, CONVERTED BACK BY PARSE, RESULTING IN NEW OBJECT
const dev2 = JSON.parse(JSON.stringify(wes));
console.log(wes);
console.log(dev);
console.log(dev2);
// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.