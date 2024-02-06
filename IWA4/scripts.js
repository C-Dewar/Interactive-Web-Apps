const date = 2050
// replaced ":" with "=" operator to fix const declaration
let statusA = 'student'
// replaced ":" with "=" operator to fix const declaration and switched to "let" to allow for manipulation within the function
let count = 0
// switched from const to  let to allow for 

if (date === 2050) {
    //changed = to strict equality operator "===" to return a boolean answer and perform the function based on that answer
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
    //removed date = "April" declaration
	console.log("April", 'Family Day')
	console.log("April", 'Freedom Day')
	count = count + 4;
    //removed "let from the redeclaration of count to count + 4"

	if (statusA === "student") {
    //changed = to strict equality operator "===" to return a boolean answer and perform the function based on that answer
	  console.log('June', 'Youth Day')
	    count = count + 1
         //removed "let from the redeclaration of count to count + 1"
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	let date = "December";
	console.log(date, 'Day of Reconciliation')
    //replaced 'date" with "December"
	count = count + 3
     //removed "let from the redeclaration of count to count + 3"

	if (statusA === "parent") {
    //changed = to strict equality operator "===" to return a boolean answer and perform the function based on that answer
	  console.log(date, 'Christmas Day')
		count = count + 1
         //removed "let from the redeclaration of count to count + 1"
  }

	console.log(date, 'Day of Goodwill')
	count = count + 1
     //removed "let from the redeclaration of count to count + 1"
}

console.log('Your status is:', statusA)
console.log('The year is:', date)
console.log('The total holidays is:', count)