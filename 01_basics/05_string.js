const name ="abhijeet"
const time ="first"
console.log(`my name is ${name} and this is my ${time} code`);



// console.log(name + repoCount + " Value");

const gameName = new String('abhi-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   abhi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhi.com/abhi%20thakur"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));