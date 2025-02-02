
// array declaration types
const myArr =[1,2,3,4,5]
const hero = ['batman', 'superman', 'spiderman', 'ironman', 'captain america', 'thor']
 const myArr2 = new Array(1,2,3,4,5)
       
 
// console.log(myArr)

// array methods

// myArr.push(6)  // add element in last
// myArr.push(7)
// myArr.pop()  // remove last element of array

// myArr.unshift(9)  // add array element on 0 index
// myArr.shift()  // remove 0th index element

// console.log(myArr.includes(5)); // check array element is include or not
// console.log(myArr.indexOf(3)); // check array index element exit or not

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);  // string data types


// slice and splice

console.log("A", myArr); // A [ 1, 2, 3, 4, 5 ]

const myN1 = myArr.slice(1,3)
console.log(myN1); // [ 2, 3 ]

console.log("B", myArr)  // B [ 1, 2, 3, 4, 5 ]

const myN2 = myArr.splice(1,3)
console.log("C", myArr);  // C [1, 5]
console.log(myN2);  // [2,3,4]







