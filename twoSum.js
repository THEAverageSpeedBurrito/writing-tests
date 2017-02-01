'use strict';

module.exports.twoSum = function (arr, target) {
  if(typeof(arr) !== 'object' || arr[0] === undefined){
    return null;
  }else if(typeof(target) !== 'number'){
    return null;
  }
    for(let i = 0; i < arr.length; i++) {
      for(let x = 0; x < arr.length; x++) {
        if(arr[i] + arr[x] === target){
          return [i, x];
        }
      }
    }
    return null;
  };
