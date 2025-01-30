
let myDates =  new Date() // object
console.log(myDates);
console.log(myDates.toString())
console.log(myDates.toDateString())
console.log(myDates.toISOString())
console.log(myDates.toJSON())
console.log(myDates.toLocaleDateString())
console.log(myDates.toLocaleString())

// 2025-01-30T23:31:44.438Z
// Thu Jan 30 2025 23:31:44 GMT+0000 (Coordinated Universal Time)
// Thu Jan 30 2025
// 2025-01-30T23:31:44.438Z
// 2025-01-30T23:31:44.438Z

// let myCreateDate = new Date(2025, 0, 25)
let myCreateDate = new Date("2025-01-25")
console.log(myCreateDate.toLocaleString());  // 1/25/2025, 12:00:00 AM

let myCreateDateTwo = new Date(2025, 0, 25, 5, 3)
console.log(myCreateDateTwo.toLocaleString()); // 1/25/2025, 5:03:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // return milisec from 01/01/1970 to present
console.log(myCreateDate.getTime());  // return milisec from 01/01/1970 to 25/01/205

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// newDate.toLocaleString('default',
//     {
//         weekday: "long"
//         .......
//     }
// )



