const addition = require('../add');

test('adds 1 + 2 to equal 3', () => {
    expect(addition.sum(1, 2)).toBe(3);
});