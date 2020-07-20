"use strict";

var _remove = function _remove(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    var temp = func(arr[i]);

    if (temp == false) {
      arr.splice(i, 1);
    }
  }

  return arr;
};

var filter = function filter(item) {
  if (item % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(_remove([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], filter));