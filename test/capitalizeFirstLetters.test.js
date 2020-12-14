const assert = require('assert');
const capitalizeFirstLetter = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetter, 'function');
    assert.strictEqual(capitalizeFirstLetter.length, 1);
  });

  it('transforms a string correctly', () => {
    assert.strictEqual(capitalizeFirstLetter('i am learning TDD'), 'I Am Learning TDD');
  });

  it('works with a 1-character string or a single string', () => {
    assert.strictEqual(capitalizeFirstLetter('zorro'), 'Zorro');
    assert.strictEqual(capitalizeFirstLetter('z'), 'Z');
  });

  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetter(''), '');
  });
})


