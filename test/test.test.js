const map = require('../sum/task');


  const arr = [1, 2, 3];
  const mockCallback = jest.fn();


// Test case 1: Test if map() calls the callback function for each element in the array
test('map() calls the callback function for each element in the array', () => {
  map(arr, mockCallback);
  expect(mockCallback.mock.calls.length).toBe(3);
});

// Test case 2: Test if map() returns a new array with the results of calling the callback function on each element
test('map() returns a new array with the results of calling the callback function on each element', () => {
  const arr = [1, 2, 3];
  const result = map(arr, x => x * 2);
  expect(result).toEqual([2, 4, 6]);
});

// Test case 3: Test if map() throws an error if the first argument is not iterable
test('map() throws an error if the first argument is not iterable', () => {
  expect(() => {
    map(123, () => {});
  }).toThrow('First argument needs to be an iterable.');
});
