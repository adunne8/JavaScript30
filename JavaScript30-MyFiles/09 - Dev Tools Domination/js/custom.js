const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello World");

// Interpolated
console.log("Hello I am a %s string", "Interpolated")

// ES6
const conParm = 'ES6 item'
console.log(`Hello I am a ${conParm}`)
// Styled
console.log('%c I am some great text', 'font-size: 50px; background: yellow');

// warning!
console.warn("I atodaso! I fuckin' atodaso");

// Error :|
console.error("Ahhhh shit! Fucked 'er bud");

// Info
console.info('The flat earth society has members all around the world');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
console.log(p.scrollWidth);

// Grouping together
dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})

// counting
console.count('wes');
console.count('wes');
console.count('ad');
console.count('wes');
console.count('wes');
console.count('ad');
console.count('wes');
console.count('wes');
console.count('ant');
console.count('wes');
console.count('ant');

console.clear();

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });
