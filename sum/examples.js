// This function takes two numbers as arguments and returns their sum.
// Throws an error if either argument is not a number.
function sum(a, b) {
    if(typeof(a) != 'number' ||  typeof(b) != 'number')
        throw new Error('Both arguments need to be numbers');
    return a + b;
}

// This function takes two arrays as arguments and returns a new array
// that contains the sum of corresponding elements from the input arrays.
// Throws an error if the arrays have different lengths or if any element
// in either array is not a number.
function sumArrays(a, b) {
    if(a.length != b.length)
        throw new Error('Both arrays need to have the same length');
    let result = []
    for(let i = 0; i < a.length; i++)
    {
        if(typeof(a[i]) != 'number' ||  typeof(b[i]) != 'number')
            throw new Error('All arguments need to be numbers');
        result.push(a[i] + b[i]);
    }
    return result;
}

// Export the two functions as an object so they can be used in other files.
module.exports = {sum, sumArrays};
