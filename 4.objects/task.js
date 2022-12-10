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

Student.prototype.getAverage = function() {
  let total = 0;
  let grades = this.marks;
  for (let i = 0; i < grades.length; i++) {        
    total += grades[i];     
  }           
  let avg = total / grades.length;      
  return avg;
}

Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}

student1.setSubject("Algebra");
student2.setSubject("Geometry");
student3.setSubject("Geographic");

student1.addMark(5);
student1.addMark(3);
student2.addMarks(4);
student3.addMarks(2, 3, 2);

console.log(student1);
console.log(student2);
console.log(student3);

console.log(student1.getAverage()); 
console.log(student2.getAverage());
console.log(student3.getAverage());

student3.exclude('Low grades');
console.log(student3);