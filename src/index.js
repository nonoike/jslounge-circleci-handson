const test = require('ava');

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

// a();
// ga();

test('sum of 1, 2, 3, 4 must be 10', (t) => {
  // console.log('sum(1, 2, 3, 4');
  t.is(sum(1, 2, 3, 4), 10);
});
