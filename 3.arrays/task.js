function compareArrays(arr1, arr2) {

  // Ваш код
  let result = arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);   

  return result; // boolean
}

compareArrays([8,8], [8,2]);

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10);
 
  // Ваш код
  return resultArr; // array
}

advancedFilter([-1,6,-9,3]);