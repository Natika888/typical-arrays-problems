
exports.min = function min (array) {
  if (arguments.length === 0 || String(array) === 'undefined') {
    return 0;}
      else if (array.length === 0) {return 0;}
        else {return Math.min.apply(null,array)}
}

exports.max = function max (array) {
  if (arguments.length === 0 || String(array) === 'undefined') {
    return 0;}
      else if (array.length === 0) {return 0;}
        else {return Math.max.apply(null,array)}
}

exports.avg = function avg (array) {
  let sum = 0;  
  if (arguments.length === 0 || String(array) === 'undefined') {
    return 0;}
      else if (array.length === 0) {return 0;}
        else {
            for (let i = 0; i<array.length;i++) {
              sum += array[i];
            } return sum/array.length;
        }
}

