let plainTxt = `Cat sat flatly on the mat while he wore a hat ?at 0at.`

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
console.log(plainTxt.match(rangeBeginning))
