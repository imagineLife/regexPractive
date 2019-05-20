'use strict'


//demo string
const str = `What is this? This is a along string. Here, I've added a bunch of stuff, to test regexp.`
const strCases = `What is this? Is this a long string? This is a along string. Here, I've added a bunch of stuff, to test regexp.`


//search pattern
let sp = 'is';


//Create a regExp
//1. Constructor Method
let regex = new RegExp('is')


//REGEX METHODS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

//use the test method on the above
//returns true
// console.log(`testing regex: ${regex.test(str)}`)


//Other regex method of creating
let regexLiteral = /is/;
// console.log(`testing regexLiteral: ${regexLiteral.test(str)}`)


//regex.exec ==> 
//	get more info about regex math results
/*
	returns
	[ 
		'is',
  		index: 5,
  		input: 'What is this? This is a along string. Here, I\'ve added a bunch of stuff, to test regexp.' 
  	]
*/
// console.log('regexLiteral.exec =>')
// console.log(regexLiteral.exec(str))


//regex flags
// global

let rglob = /is/g;
// console.log('rglob.exec(str)')
// console.log(rglob.exec(str))


//notice running it twice outputs different result:
/*
	Returns:
	[ 'is',
  index: 5,
  input: 'What is this? This is a along string. Here, I\'ve added a bunch of stuff, to test regexp.' ]
	[ 'is',
  index: 10,
  input: 'What is this? This is a along string. Here, I\'ve added a bunch of stuff, to test regexp.' ]

  regex is state-aware.
*/
// console.log('rglob.exec(str) twice...')
// console.log(rglob.exec(str))
// console.log(rglob.exec(str))



//regex flag 2 the i, ignore case
const rind = /is/gi;
// console.log(rind.exec(strCases))
// console.log(rind.exec(strCases))
// console.log(rind.exec(strCases))


//string methods work well with regex
//MATCH
//returns array of regex matches!!
// console.log(strCases.match(rind))


//string replace
/*
	returns:
	What xyz thxyz? xyz thxyz a long string? Thxyz xyz a along string. Here, I've added a bunch of stuff, to test regexp.
*/
// console.log('STRING.Replace');
// console.log(strCases.replace(rind, string => "xyz"))


//string search
//returns FIRST instance of matching regex pattern
// console.log(strCases.search(rind))


//find plain text pattern
let plainTxt = `Cat sat flatly on the mat while he wore a hat.`
let findCat = /Cat/
let findAt = /at/g

// console.log(plainTxt.match(findAt))


//find all words that END in 'at'
// returns [ 'Cat', 'sat', 'lat', 'mat', 'hat' ]
let findEndInAt = /.at/g
// console.log(plainTxt.match(findEndInAt))


//find repeating characters?!
//returns [ 'aaaa' ]
let strRep = `aaaaaa`
let findRepAs = /aaaa/g
// console.log(strRep.match(findRepAs))

//Find-by-count
let findByCount = /a{5}/g
// console.log(strRep.match(findByCount))


//Find-by-count
// comma is AT LEAST
// nothing is infinity
let findByCountTill = /a{5,}/g
// console.log(strRep.match(findByCountTill))


let twoURLS = `https://www.google.com
NOT a web address
http://
http://google.com`
//finds http OR/AND https
//returns [ 'https', 'http', 'http' ]
const findHTTPs = /https{0,1}/g
// console.log(twoURLS.match(findHTTPs))