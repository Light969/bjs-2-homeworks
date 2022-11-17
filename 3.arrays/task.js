function compareArrays(arr1, arr2) {
  // let result;

  // Ваш код
  let newArray = [JSON.stringify(arr1), JSON.stringify(arr2)];
  let result = newArray.every((item) => item == JSON.stringify(arr1));
  
  console.log(arr1, arr2);
  console.log(newArray);
  console.log(result);

  // Почему выдаёт false, когда массивы одинаковые?

  // const newArray = [arr1, arr2];
  // console.log(newArray);
  // newArray.every((item) => item === arr1);
  // console.log(newArray.every((item) => item === arr1));


  // Сравниваем массивы по длинне, если длинна не равна, то однозначно false
  
  // if (arr1.length === arr2.length) {
  //   result = true;
  //   console.log(result);
  //   console.log('Верное утверждение');
  // } else {
  //   result = false;
  //   console.log(result);
  //   console.log('Не верное утверждение');
  // }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  console.log(arr);

  // Ваш код
  resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10);

  console.log(resultArr);

  return resultArr; // array
}

advancedFilter([-1,6,-9,3]);