//=========================================
// Javascript Identifier Rules- I
// ======================================


let myName = "Rithan"; // Valid identifier - camelCase
let _myName = "Rithan"; // Valid identifier - starts with underscore
let $myName = "Rithan"; // Valid identifier - starts with dollar sign


let item1 = "Item 1"; // Valid identifier - contains numbers
let _item2 = "Item 2"; // Valid identifier - starts with underscore and contains numbers
let $item3 = "Item 3"; // Valid identifier - starts with dollar sign and contains numbers

let a1_b2_c3 = "mixed letters and numbers"; // Valid identifier - contains underscores and numbers

//let 1stItem = "Item 1"; // Invalid identifier - starts with a number
//let 2ndItem = "invalid"; // Invalid identifier - starts with a number


//Invalid identifiers - reserved keywords
//let class = "This is a reserved keyword"; // Valid identifier - but not recommended to use reserved keywords as variable names
//let function = "This is a reserved keyword"; // Valid identifier - but not recommended to use reserved keywords as variable names   
//let const = "This is a reserved keyword"; // Valid identifier - but not recommended to use reserved keywords as variable names

let MyVar = "uppercase M"; // Valid identifier - starts with uppercase letter
let myvar = "lowercase m"; // Valid identifier - starts with lowercase letter

// Unicode letters and Unicode escape sequences are allowed
let cafe = "café"; // Valid identifier - contains special character - unicode (accented letter)
let 中文 = "chinese"; // Valid identifier - contains special character - unicode (Chinese characters)
let \u0041 = "unicode escape for A"; // Valid identifier - contains unicode escape sequence (represents the letter 'a')
let \u005f = "unicode escape for underscore"; // Valid identifier - contains unicode escape sequence (represents the underscore  _  character)

//let a-b = "invalid"; // Invalid identifier - contains hyphen (not allowed in identifiers)
//let a b = "invalid"; // Invalid identifier - contains space (not allowed in identifiers)
//let a@b = "invalid"; // Invalid identifier - contains @ special character (not allowed in identifiers)
//let a#b = "invalid"; // Invalid identifier - contains # special character (not allowed in identifiers)
//let a!b = "invalid"; // Invalid identifier - contains special character (not allowed in identifiers)
