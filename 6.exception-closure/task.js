function parseCount(number) {
    let result = Number(number);
    if (result === NaN) {
      throw 'Не верное значение';
    }
    console.log(result);
    return result;
  }
  
  parseCount('Привет');
  parseCount(57);

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
      let perimetr = this.a + this.b + this.c;
      console.log(perimetr);
      return perimetr;
    }
  
    getArea() {
      let p = (this.a + this.b + this.c) / 2;
      let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      console.log(area);
      return area;    
    }
  }

   // Вторая часть задачи

   function getTriangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  
    if (a + b < c || a + c < b || b + c < a) {
        throw 'Треугольник с такими сторонами не существует';
      }
  
      let perimetr = this.a + this.b + this.c;
      console.log(perimetr);
    
      let p = (this.a + this.b + this.c) / 2;
      let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      console.log(area);
  }