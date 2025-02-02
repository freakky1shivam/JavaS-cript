const score = 100
console.log(score); //100

const balance = new Number(100)
console.log(balance); // Number: 100

console.log(balance.toString().length); //3
console.log(balance.toFixed(1));  // 100.3

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(5)) // 3 --> 124 , 4 --> 123.9 , 5 -->123.90

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000


