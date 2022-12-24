function parseCount(number) {
  let result = Number(number);
  if (Number.isNaN(result)) {
    throw new Error('Не верное значение');
  }
  console.log(result);
  return result;
}

function validateCount(number) {
  try {
    console.log('Внутри блока try');
    return parseCount(number);
  } catch (error) {
    console.log(error);
    console.log('Перехватили ошибку');
  } finally {
    console.log('Внутри блока finally');
  }
}


  // 2язадача-----------------------------------

  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
  
      if (a + b < c || a + c < b || b + c < a) {
        throw 'Треугольник с такими сторонами не существует';
      }
    }
    
    getPerimeter() {
      console.log(this.a + this.b + this.c);
      return this.a + this.b + this.c;
    }
  
    getArea() {
      let p = this.getPerimeter() / 2;
      let area = Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(2));
      console.log(area);
      console.log(typeof area);
      return area;
    }
  }

   // Вторая часть задачи

   function getTriangle(a, b, c) {
    try {
      console.log('Внутри блока try');
      return new Triangle(a, b, c);
    } catch (error) {
      console.log(error);
      console.log('Перехватили ошибку');
    } finally {
      console.log('Внутри блока finally');
      new Triangle(a, b, c).getPerimeter();
      new Triangle(a, b, c).getArea();
    }
  }