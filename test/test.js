const { expect } = require('chai');
const { returnsTwo } = require('../main');

describe('Array', function() {
  describe('#test()', function() {
    it('should return 2', function() {
      expect(returnsTwo()).to.equal(2);
    });
  });
});
