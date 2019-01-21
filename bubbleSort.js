var array = [2,4,5,1,3]

function bubbleSort(array) {
  var i, neighbor, limit 
  limit = array.length; while(limit--) {
    for(i = 0, neighbor = 1; i < limit; ++i, ++neighbor)
      if(array[i] > array[neighbor]) {temporary = array[i]; array[i] = array[neighbor]; array[neighbor] = temporary;}
  }
  return array
}

module.exports = bubbleSort