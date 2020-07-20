"use strict";

var _reverse = function _reverse(arr) {
  var temp = 0;

  if (arr.length % 2 == 0) {
    for (var i = 0; i < arr.length / 2; i++) {
      temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  } else {
    for (var _i = 0; _i < (arr.length - 1) / 2 + 1; _i++) {
      temp = arr[_i];
      arr[_i] = arr[arr.length - 1 - _i];
      arr[arr.length - 1 - _i] = temp;
    }
  }

  return arr;
};

console.log(_reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));