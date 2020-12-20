//Opdracht A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = array => array.find(({ name }) => name === "Spiderman");

console.log(findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//Opdracht B
// Deze werkt niet
// let doubleArrayValues = function(array) {
//     console.log(array.forEach(x => x * 2));
// }

// doubleArrayValues([1, 2, 3]) 


const doubleArrayValues = array => console.log(array.map(x => x * 2));

doubleArrayValues([1, 2, 3]) 

//Opdracht C

const containsNumberBiggerThan10 = array => console.log(array.some(x => x > 10));

containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 
  // result should be true
  containsNumberBiggerThan10([1,2,1,2,1,2])
  // result should be false

//Opdracht D

const isItalyInTheGreat7 = array => console.log(array.includes('Italy'));

isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
  // result should be true

//Opdracht E

const tenfold = array => array.map(x => 10 * x);

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
  // result should be [10, 40, 30, 60, 90, 70, 110]

//Opdracht F

const isBelow100 = array => array.every(x => x < 100);
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
  // result should be: false

//opdracht G

const bigSum = array => array.reduce((integer, totalvalue)=> integer +totalvalue);

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118