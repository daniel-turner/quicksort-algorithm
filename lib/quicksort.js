window.quickSorter = (function() {

  function sort(unsortedArray) {

    if(Array.isArray(unsortedArray)) {

      throw new TypeError("quickSorter did not receive an array object to sort");
    }

    return recursive_sort(unsortedArray);
  };

  function recursive_sort(unsortedArray) {

    var pivotIndex = Math.floor(unsortedArray.length/2);
    var pivotValue = unsortedArray[pivotIndex];
    var left = [];
    var right = [];

    pivotValue = unsortedArray.splice(pivotIndex,1);

    for(var i = 0; i< unsortedArray.length; i++) {

      if( typeof unsortedArray[i] !== 'number') {

        throw new TypeError("quickSorter did not receive an array of numbers to sort");
      };

      if(unsortedArray[i] < pivotValue) {

        left.push(unsortedArray[i]);

      } else {

        right.push(unsortedArray[i]);
      }
    }

    if(left.length > 0) {

      left = recursive_sort(left);
    }

    if(right.length > 0 ) {

      right = recursive_sort(right);
    }

    left.concat(pivotValue,right);

    return left;
  };

  return {

    sort: sort
  }
});