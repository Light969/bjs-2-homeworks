class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  
    fix() {
      this.state = this.state * 1.5;
      if (this.state > 100) {
        this.state = 100;
      }
    }
  }

  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }  
  }

  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }


  // Задача 2

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }
  
  addBook(book) {
    if (book.state >= 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < Library.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }    
    }
    return null;
  }
}

  // Задача 3

  class Student {
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.subjects = {};
    }

    addMark(mark, subject) {
      if (mark > 5) {
        console.log('Ошибка, оценка должна быть числом от 1 до 5');
      } else if (this.subjects[subject] === undefined) {
        this.subjects[subject] = [mark];
      } else {
        this.subjects[subject].push(mark);
      }
    }
  
    getAverageBySubject(subject) {
      if (this.subjects[subject] === undefined) {
        console.log('Несуществующий предмет');
      } else {
        let total = 0;
        let grades = this.subjects[subject];
        for (let i = 0; i < grades.length; i++) {
          total += grades[i];
        }
        let avg = total / grades.length;
        console.log(`Средний балл по предмету ${subject}: ${avg}`);
        return avg;
      }
    }

    getAverage() {
      var counter = 0;
      let sum = 0;
      for (let key in this.subjects) {
        let total = 0;
        let grades = this.subjects[key];
        for (let i = 0; i < grades.length; i++) {
          total += grades[i];
        }
        let avg = total / grades.length;
  
        sum += avg;
        counter++;
      }
      console.log('Средний балл по всем предметам ' + sum / counter);
      return sum / counter;
    }

    exclude(reason) {
      console.log(reason);
    }
  }
  
