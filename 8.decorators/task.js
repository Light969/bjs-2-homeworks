sum = (...args) => args.reduce((arg, item) => arg + item, 0);
const cachedSum = cachingDecoratorNew(sum);

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    // console.log(hash);
    let objectInCache = cache.find((item) => item === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache) { // если элемент не найден (! удалил перед названием функции)
      console.log("Из кэша: " + cache[hash]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + cache[hash];
    }

    let result = func(...args); // в кэше результата нет - придётся считать

    cache.push({ hash: `${hash}`, value: sum(...args) }); // добавляем элемент с правильной структурой
    // console.log(cache);
  }
  return wrapper;
}


function debounceDecoratorNew(func) {
  // Ваш код
}