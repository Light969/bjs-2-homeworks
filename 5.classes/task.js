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
    for (let i = 0; i < Library.length; i++) {
      if (this.books[i].name === bookName) {
        // delete this.books[i];
        // delete(books[i]);
        delete (this.books[i]);
        // this.books.splice(i, 1);
        // return this.books.splice(i, 1)[0];
        // return library;                  
      } else {
        return null;
      }
    }
  }
}

  // Задача 3

  class Student {
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.subjects = [];
    }
    //  addSubject(subject) {
    // 	this.subjects.push([subject]);
    //   }
  
    addMarks(subject, ...mark) {
      this.subjects.push({ subject: [...mark] });
    }

    getAverageBySubject(subject) {

      let total = 0;
      grades = this.subjects;
      for (let i = 0; i < grades.length; i++) {
        total += grades[i].subject;
      }
      let avg = total / grades.length;
      returnavg;
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
  console.log(student2);