// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код

  sum = 0;
  min = Infinity;
  max = -Infinity;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }

  avg = +(sum / arr.length).toFixed(2);
  }

  return { min: min, max: max, avg: avg };
}



// Задание 2
function worker(arr) {
  let sum;

  // Ваш код
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  max = 0;
  for (i = 0; i < arrOfArr[i].length; i++) {
    if (worker(arrOfArr[i]) > max) {
      max = worker(arrOfArr[i]);
    } 
  }
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
