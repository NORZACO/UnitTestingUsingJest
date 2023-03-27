// The task
// In this lesson, we learnt about unit testing. In this task, you need to create unit tests for the following method:
// map.js:


function map(array, callback) {
    if(typeof array[Symbol.iterator] !== 'function') {
        throw new Error('First argument needs to be an iterable.')
    }
    const resultArray = [];
    for (let index = 0; index < array.length; index++) {
        resultArray.push(callback(array[index], index, array));
    }
    return resultArray;
}

module.exports = map