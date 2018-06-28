// here's a good intro to es6 object desctructuring:
// https://wesbos.com/destructuring-objects/
const { expect } = require('chai');
// REMINDER: require all functions you're using from main.js
const { returnsTwo } = require('../main');

describe('Array', function() {
  describe('#test()', function() {
    it('should return 2', function() {
      expect(returnsTwo()).to.equal(2);
    });
  });
});
