// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const { lists: [first, second, third] } = data;

// Correct usage of slice to clone arrays.
const first1 = first[1].slice();
const second1 = second[1].slice();
const third1 = third[1].slice();

const extractBiggest = () => {
    let maxValue = -Infinity;
    let maxIndex = -1;

    //Negative infinity is used as a frame of reference to ensure that the array iterates over all real number values as all real numbers will be greater value than "-infinity"

    // Checking the last value of first1 array
    if (first1.length > 0 && first1[first1.length - 1] > maxValue) {
        maxValue = first1[first1.length - 1];
        maxIndex = 'first';
    }
    // Checking the last value of second1 array
    if (second1.length > 0 && second1[second1.length - 1] > maxValue) {
        maxValue = second1[second1.length - 1];
        maxIndex = 'second';
    }
    // Checking the last value of third1 array
    if (third1.length > 0 && third1[third1.length - 1] > maxValue) {
        maxValue = third1[third1.length - 1];
        maxIndex = 'third';
    }

    // Popping the value from the array that had the highest last value
    if (maxIndex === 'first') {
        return first1.pop();
    } else if (maxIndex === 'second') {
        return second1.pop();
    } else if (maxIndex === 'third') {
        return third1.pop();
    }
}

// Initialize the result array and fill it by repeatedly calling extractBiggest.
const result = [];


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

//should log [10, 12, 14, 5, 7, 13, 11, 15, 4, 8, 6, 2, 1, 3, 9]
// if (1.length > 2.length && 3.length < 2.length)
// else if (3.length > 2.length)
// Only edit above

