// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  
  sum = 0;
  min = Infinity;
  max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];     //
    if (arr.length === 1) {
      min = arr[i];
      max = arr[i];
    } else if (arr[i] < min) {
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
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  // Ваш кода
  
  // for ...
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(arrOfArr[i]);
    if (funcResult > max) {
      max = funcResult;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min = Infinity;
  let max = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
      
    if (arr.length === 1) {
      min = arr[i];
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    } 
  }
  console.log(`Максимальное значение: ${max}.`);
  console.log(`Минимальное значение: ${min}.`);

  let difference = Math.abs(max - min);
  console.log(`Разность значений: ${difference}.`);
}

