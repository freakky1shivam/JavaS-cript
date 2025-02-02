
// Primitive Data type 

// 7 types : String , Number , Boolean, null, undefined, Symbol, BigInt

const score = 100
const scopeValue = 100.3
const isLoggedIn = false
const outSideTemp = null   
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId) // false

const bigNumber = 1541541515458n


// Reference (Non primitive)

// Array, Objects, Functions

const Array  = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Shivam",
    age: 18,
}

console.log(typeof bigNumber);

/*  Type of val                      Result
     Undefined                        undefined
     Null                             object
    Boolean                            boolean
    Number                            number
    String                            string
    Object(native and                 object
    does not implement [[call]])

    Object(native or host and          function
    does implement[[Call]])

    Object (host and does not           implementation defined expect may not be
    implement [[Call]])                 "undefined", "boolean", "number", or "string"

*/
