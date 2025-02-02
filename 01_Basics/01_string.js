const name = "Shivam"
const repoCount = 50

 //console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

 const gameName = new String('Shivam')

 console.log(gameName[0]); // S
 console.log(gameName.__proto__);  //{}
 
 
 console.log(gameName.length); // 6
 console.log(gameName.toUpperCase);
 console.log(gameName.charAt(2)); // i
console.log(gameName.indexOf('i')) //2

const newString = gameName.substring(0, 4)
console.log(newString);  // Shiv

 const anotherString = gameName.slice(-8, 3)
 console.log(anotherString); //Shiv
 

 const newStringOne = "   Shivam   "
 console.log(newStringOne); //      Shivam
 console.log(newStringOne.trim);// Shivam
 

 const url =  "https://google131com"

 console.log(url.replace('131', '.')); // https://google.com
 
 console.log(url.includes('shiv')); // false
 console.log(url.includes('google')); // true

 console.log(gameName.split('v')); // ['Shiv', 'am']
 
 
 
 