class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    // Создаём сеттер для метод state
    set newState(newState) {
        this.state = newState;
        if (newState < 0) {
          this.state = 0;
        }
        if (newState > 100) {
          this.state = 100;
        }
        this._state = newState;
      }
      
      get newState() {
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
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
    }  
  }

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "Novel";
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "Fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "Detective";
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

  // giveBookByName(bookName) {
  //   for (let i = 0; i < Library.length; i++) {
  //     if (this.book.name === bookName) {
  //       return book.name;
  //       console.log(book.name);
  //     }
  //   }
  // }
}


class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subjects = [];
    }
  //  addSubject(subject) {
  // 	this.subject.push([subject]);
  //   }
  
  addMarks(subject, ...mark) {
    this.subject.push(subject, [...mark]);
    }  
  }
  
  let student1 = new Student('Mike', 'male', 20);
  let student2 = new Student('Katya', 'female', 19);
  let student3 = new Student('Oleg', 'male', 21);
  
  console.log([student1, student2, student3]);
  
  // student1.addSubject('algebra');
  // student1.addSubject('geometry');
  
  student2.addMarks('algebra', 5);
  student2.addMarks('geometry', 5, 4, 5);
  console.log([student1, student2, student3]);