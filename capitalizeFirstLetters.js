const assert = require('assert');

assert.strictEqual(typeof capitalizeFirstLetter, 'function');
assert.strictEqual(capitalizeFirst('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirst('zorro'), 'Zorro');
assert.strictEqual(capitalizeFirst('z'), 'Z');
assert.strictEqual(capitalizeFirst(''), '');