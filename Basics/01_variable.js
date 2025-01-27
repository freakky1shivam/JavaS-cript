const accountId = 2432907
let accounEmail = "shivam@gmail.com"
var accounPassword = "123456"
accounCity = "Kanpur"
let accounState
console.table([accountId, accounEmail, accounPassword, accounCity, accounState])

// accountId = 15  // not allowed

console.log("After changing")
accounEmail = "abc@gmail.com"
accounPassword = "555555"
accounCity = "Lucknow"

console.table([accountId, accounEmail, accounPassword, accounCity, accounState])

/*
prefer not to use var because of issue in block scope and functional scope
*/