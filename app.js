// Given a random non-negative number, you have to return the digits of 
// this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
    let numToArray = Array.from(String(n), Number)
    return numToArray.reverse()
  }

//PREP Method

// P - Parameters
// Random non-negative number.  Any number of digits.


// R - Return
// Return an array.  Input reversed, with each number in it's own index.


// E - Examples
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// P - Pseudocode
// 1.) Convert the number to an array
// 2.) Reverse the array
// 3.) Return that array