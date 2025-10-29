const accountId = 102004
let accountEmail = "aniket@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId=2 //not allowed
accountEmail = "a@gmail.com"
accountPassword= "121212"
accountCity = "Mumbai"

/*
    Prefer not to use var
    Because of issue in block scope and functional scope
*/
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])