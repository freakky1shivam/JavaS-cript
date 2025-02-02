  

console.log(Math); // Object [Math] {}
console.log(Math.abs(-8));  // 8
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.6));  // 5
console.log(Math.floor(4.6)); //4
console.log(Math.min(4,3,5,8));  // 3
console.log(Math.max(4,3,6,8));  // 8


console.log(Math.random());  // genrate number from 0 to 1
console.log((Math.random()*10) + 1);  // for avoid 0
console.log(Math.floor(Math.random()*10) + 1)  // for genrate single nuber

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // genrate number from min to max










