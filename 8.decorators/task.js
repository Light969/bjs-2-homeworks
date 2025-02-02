sum = (...args) => args.reduce((arg, item) => arg + item, 0);
const cachedSum = cachingDecoratorNew(sum);

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    // console.log(hash);
    let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache) { // если элемент не найден (! удалил перед названием функции)
      // console.log(objectInCache);
      // console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + objectInCache.value;
    }
    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({ hash: hash, value: result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) { 
      cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    // console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}


sum = (...args) => args.reduce((arg, item) => arg + item, 0);

function debounceDecoratorNew(func, dalay) {
let timeoutId = null;
  function wrapper(...args) {  
  wrapper.allCount ++;
    if (timeoutId) {
      console.log('Удалили текущий таймаут'); 
      clearTimeout(timeoutId);
    }	  
    console.log('Создаём новый таймаут'); 
    timeoutId = setTimeout(() => {	  
      wrapper.count ++;
      func(...args);  
    console.log('Вызвали колбек');
    }, dalay); 
    if (timeoutId === null) {
      wrapper.count ++; 
      func(...args);  
    }
    return func(...args); 	
  }  

wrapper.count = 0;
wrapper.allCount = 0;
return wrapper;  
}

const sendSignal = debounceDecoratorNew(sum, 6000);

sendSignal(1,2,3);
sendSignal.count;
sendSignal.allCount