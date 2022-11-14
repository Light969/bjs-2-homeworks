// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код

  arr;
  sum = 0;
  min = Infinity;
  max = -Infinity;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}



// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  arr;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  // Ваш кода
  arrOfArr,
  func = worker;

  // for ...
  
  for (i = 0; i < arrOfArr.length; i++) {
    if (func([arrOfArr[i]]) > max) {
      max = func([arrOfArr[i]]);
    } 
  }

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
