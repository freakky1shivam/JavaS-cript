

// two types of memory
// Stack(Primitive), Heap(Non-Primitive)

let myName = "Shivam"
let anotherName = myName

anotherName = "chaudhary"

console.log(myName);
console.log(anotherName);

let user = {
    email: "user@google.com",
    upiId: "user@ybl",
}

let userTwo = user

userTwo.email = "shivam@google.com"

console.log(user.email); // shivam@google.com
console.log(userTwo.email);  // shivam@google.com




