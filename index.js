function iterativeLog(array) {
  array.forEach((element,index) => {console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var array=[123,456,789]
  array.forEach(callback);
  return array;
}

function doToArray(array,callback) {
  array.forEach(callback)
}
