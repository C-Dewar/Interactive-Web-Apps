// const value = "3"
//doesn't work because "3" is a string not a number. Can get it to work by removing the quotation marks or parsing the value to a numerical one.
// console.log(value + 4 + value)

//Solution 1: Easiest

const value = 3
console.log(value + 4 + value)

//Solution 2: Parse to Integer

const value = "3"
const intValue = parseInt(value)
console.log(intValue + 4 + intValue)