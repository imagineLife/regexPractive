let plainTxt = `Cat sat flatly on the mat while he wore a hat ?at 0at.`
let capsText = `Cat sat flatly on the Mat while he wore a hat ?at 0at.`

//match all 'at's
let pattern = /at/g
// console.log(plainTxt.match(pattern))


//match all '*at's, anything before the 'at'
let prePattern = /.at/g
//returns [ 'Cat', 'sat', 'lat', 'mat', 'hat', '?at', '0at' ]
// console.log(plainTxt.match(prePattern))


//CHARACTER CLASS
//optional characters willing to accept
let exclusivePrePattern = /[Cm]at/g
//returns [ 'Cat', 'mat' ]
// console.log(plainTxt.match(exclusivePrePattern))

let restrictiveBeginning = /[^Cm]at/g
//returns [ 'sat', 'lat', 'hat', '?at', '0at' ]
// console.log(plainTxt.match(restrictiveBeginning))

let rangeBeginning = /[a-z]at/g
//returns [ 'sat', 'lat', 'mat', 'hat' ]
// console.log(plainTxt.match(rangeBeginning))

let rangeBeginningCaps = /[a-zA-Z]at/g
//returns [ 'Cat', 'sat', 'lat', 'Mat', 'hat' ]
// console.log(capsText.match(rangeBeginningCaps))

let rangeBeginningNoLetters = /[^a-zA-Z]at/g
//returns [ 'Cat', 'sat', 'lat', 'Mat', 'hat' ]
// console.log(capsText.match(rangeBeginningNoLetters))


let rangeBegWithDigits = /[a-zA-Z0-9]at/g
//returns [ 'Cat', 'sat', 'lat', 'Mat', 'hat', '0at' ]
// console.log(capsText.match(rangeBegWithDigits))







/* 

	shorthand charClasses

*/

let funkyString = `Aeiou $100 55.5%`
let searchFunky = /[a-zA-Z0-9]/g
let onlyLettersAndNumbers = /\w/g

//the bove search strings return the same things...
//returns [ 'A', 'e', 'i', 'o', 'u', '1', '0', '0', '5', '5', '5' ]
// console.log(funkyString.match(onlyLettersAndNumbers))

//match only digits
let onlyDigits = /\d/g
//returns [ '1', '0', '0', '5', '5', '5' ]
// console.log(funkyString.match(onlyDigits))


//match only whitespace
let onlyWhiteSpace = /\s/g
//returns [ ' ', ' ' ]
console.log(funkyString.match(onlyWhiteSpace))
