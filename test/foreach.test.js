const { forEach } = require("../sum/foreach")




// Define a mock callback function that adds 42 to the given argument
const mockCallback = jest.fn((x) => 42 + x);




// Test the forEach() function with the mock callback
test('forEach mock function', () => {
  // Call forEach() with an array of two elements and the mock callback
  forEach([0, 1], mockCallback);

  // Check if the mock callback function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // Check if the mock callback function was called with the correct arguments
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // Check if the mock callback function returned the correct results
  expect(mockCallback.mock.results[0].value).toBe(42);
});





// Test case 1: Test if forEach() calls the callback function for each element in the array
test('forEach() calls the callback function for each element in the array', () => {
  const arr = [1, 2, 3];
  const mockCallback = jest.fn();
  forEach(arr, mockCallback);
  expect(mockCallback.mock.calls.length).toBe(3);
});

// Test case 2: Test if forEach() passes the correct arguments to the callback function
test('forEach() passes the correct arguments to the callback function', () => {
  const arr = [1, 2, 3];
  const mockCallback = jest.fn();
  forEach(arr, mockCallback);
  expect(mockCallback.mock.calls[0][0]).toBe(1);
  expect(mockCallback.mock.calls[1][0]).toBe(2);
  expect(mockCallback.mock.calls[2][0]).toBe(3);
});

// Test case 3: Test if forEach() returns undefined
test('forEach() returns undefined', () => {
  const arr = [1, 2, 3];
  const result = forEach(arr, () => { });
  expect(result).toBe(undefined);
});
