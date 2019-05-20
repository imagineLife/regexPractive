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
console.log(strCases.match(rind))