
const marvel_heroes = ['thor', "ironman", 'spiderman']
const dc_heroes = ["superman", "flash", "batman" ]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);  // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3]);  // [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heroes[3][1]);  // flash


// const all_hero = marvel_heroes.concat(dc_heroes)
// console.log(all_hero);  // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_hero = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_hero); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);  
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.isArray("Shivam")); // false
console.log(Array.from("SHivam"));  // [ 'S', 'H', 'i', 'v', 'a', 'm' ]
console.log(Array.from({name : "Shivam"}));  // []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]

