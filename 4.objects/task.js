function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student('Mike', 'male', 20);
let student2 = new Student('Katya', 'female', 19);
let student3 = new Student('Oleg', 'male', 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    // добавить первуюоценку
    this.marks = [mark];
  } else {
    // добавить вторую и последующие оценки в массив
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...mark) {
  if (this.marks === undefined) {
    this.marks = [...mark];
  } else {
    this.marks.push(...mark);
  }
}

student1.setSubject("Algebra");
student2.setSubject("Geometry");

student1.addMark(5);
student1.addMark(3);

student3.addMarks(2, 3, 2);

console.log(student1);
console.log(student2);
console.log(student3);
