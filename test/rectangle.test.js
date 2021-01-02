const assert = require('assert');
const Rectangle = require('../rectangle');

// give the test suite a label using describe

describe('rectangle test', () => {

  // give the test a label using it

  it('is a square', () => {
    const rectangle = new Rectangle(10, 10);
    assert.strictEqual(rectangle.isSquare(), true)
  });

  it('is not a square', () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.isSquare(), false)
  });

  it('get the rectangle area', () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getArea(), 50)
  });

  it('get the rectangle area', () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getPerimeter(), 30)
  });
});