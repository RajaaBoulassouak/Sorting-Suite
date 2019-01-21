const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe("bubbleSort", function() {
  it("it sorts an unsorted array", function() {
    var unsortedArray = [2,4,5,1,3]
    var sortedArray = [1,2,3,4,5]
    assert.deepEqual(bubbleSort(unsortedArray), sortedArray)
  })
})