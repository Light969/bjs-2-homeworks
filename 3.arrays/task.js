function compareArrays(arr1, arr2) {

  // Ваш код
  let result = arr1.every((item, index) => (item, index).arr1 === (item, index).arr2);

  // let result = arr1.every((item, index) => arr1.item === arr2.item && arr1.index === arr2.index);

  return result; // boolean
}

compareArrays([8,2], [8,2]);

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10);
 
  // Ваш код
  return resultArr; // array
}

advancedFilter([-1,6,-9,3]);