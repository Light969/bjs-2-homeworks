function parseCount(number) {
  let result = Number(number);
  if (Number.isNaN(result)) {
    throw new Error('Невалидное значение');
  }
  return result;
}

function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  } 
}


  // 2язадача-----------------------------------

  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
  
      if (a + b < c || a + c < b || b + c < a) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
    }
    
    getPerimeter() {
      return this.a + this.b + this.c;
    }
  
    getArea() {
      let p = this.getPerimeter() / 2;
      return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
  }

   // Вторая часть задачи

   function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      console.log(error);
      
      return {
        getArea() {
        return 'Ошибка! Треугольник не существует';
        },
        getPerimeter() {
        return 'Ошибка! Треугольник не существует';
        }
      }
    } 
  }