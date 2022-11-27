function compareArrays(arr1, arr2) {

  // Ваш код
  let result = arr1.every((item, index) => (item, index) === arr2[item][index] && arr1.length === arr2.length);

  // let result = arr1.every((item) => (item) === arr2[0] && arr1.length === arr2.length);  

  return result; // boolean
}

compareArrays([8,8], [8,2]);

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10);
 
  // Ваш код
  return resultArr; // array
}

advancedFilter([-1,6,-9,3]);