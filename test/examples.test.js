const { sum, sumArrays } = require('../sum/examples');

test(' 1| adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test(' 2| adds floats 1.00000001 and 3 to equal 4', () => {
    expect(sum(1.00000001, 3)).toBe(4);
});

test(' 3| adds floats 1.00000001 and 3 to be close to 4', () => {
    expect(sum(1.00000001, 3)).toBeCloseTo(4);
});

test(' 4| adds number and string', () => {
    expect(() => sum('1', 2)).toThrow(Error);
});

test(' 5| adds number and string, checks for exact error', () => {
    expect(() => sum('1', 2)).toThrow('Both arguments need to be numbers');
});

test(' 6| adds number and string, checks for exact error, to be failed', () => {
    expect(() => sum('1', 2)).toThrow('All arguments need to be numbers');
});

test(' 7| adds two arrays of numbers', () => {
    expect(sumArrays([1, 2], [2, 3])).toContain(3);
    expect(sumArrays([1, 2], [2, 3])).toContain(5);
});

test(' 8| adds two arrays of numbers - to be failed', () => {
    expect(sumArrays([1, 2], [2, 3])).toContain(3);
    expect(sumArrays([1, 2], [2, 3])).toContain(6);
});