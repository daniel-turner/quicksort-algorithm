var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var quicksort = require('../lib/quicksort');
console.log(quicksort);

describe('Quick Sorting', function() {

  it('is a function', function() {

    quicksort.sort.should.be.function;
  })

  describe('input validation', function() {

    it('should only accept arrays', function() {

      quicksort.sort([]).should.have.length(0);
      expect(quicksort.sort.bind(quicksort.sort, {})).to.throw('quickSorter did not receive an array object to sort');
      expect(quicksort.sort.bind(quicksort.sort, NaN)).to.throw('quickSorter did not receive an array object to sort');
    })
  });

  describe('output validation', function() {

    var input = [6,3,8,1,0,3,2,9,7,3,2];
    var out = quicksort.sort(input);

    it('input should return length 11', function() {

      out.should.have.length(11);
    });

    it('input should return [0,1,2,2,3,3,3,6,7,8,9] given [6,3,8,1,0,3,2,9,7,3,2]', function() {

      out.should.deep.equal([0,1,2,2,3,3,3,6,7,8,9]);
    })
  })
})