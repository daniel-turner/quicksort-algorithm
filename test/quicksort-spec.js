var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var quicksort = require('../lib/quicksort');

describe('Quick Sorting', function() {

  it('is a function', function() {

    quicksort.quicksorter.sort.should.be.function;
  })

  describe('input validation', function() {

    it('should only accept arrays', function() {

      quicksort.quicksorter.sort([]).should.have.length(0);
      expect(quicksort.quicksorter.sort.bind(quicksort.quicksorter.sort, {})).to.throw('quickSorter did not receive an array object to sort');
      expect(quicksort.quicksorter.sort.bind(quicksort.quicksorter.sort, NaN)).to.throw('quickSorter did not receive an array object to sort');
    })
  });

  describe('output validation', function() {

    var input = [6,3,8,1,0,3,2,9,7,3,2];

    it('input should return length 11', function() {

      quicksort.quicksorter.sort(input).should.have.length(11);
    });

    it('input should return [0,1,2,2,3,3,3,6,7,8,9] given [6,3,8,1,0,3,2,9,7,3,2]', function() {

      quicksort.quicksorter.sort(input).should.deep.equal([0,1,2,2,3,3,3,6,7,8,9]);
    })
  })
})