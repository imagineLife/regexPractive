'use strict'


//demo string
const str = `What is this? This is a along string. Here, I've added a bunch of stuff, to test regexp.`

//search pattern
let sp = 'is';

//Create a regExp
//1. Constructor Method
let regex = new RegExp('is')

//REGEX METHODS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

//use the test method on the above
//returns true
console.log(regex.test(str))

