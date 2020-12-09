  // Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];

    console.log(fruits.join());
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(','));
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.sort((a, b) => b - a));
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const newArray = array.slice(0, 2);
    console.log(array);
    console.log(newArray);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      console.log(students.find((student) => student.score == 90));
  }
  
  // Q6. make an array of enrolled students
  {
      const enrolledStudents = students.filter(student => student.enrolled == true);
      console.log(enrolledStudents);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      console.log(students.map(student => student.score));
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      console.log(students.some(student => student.score < 50));
  }
  
  // Q9. compute students' average score
  {
    let result = 0;
    result = students.reduce((preStudent, curStudent) => preStudent + curStudent.score, 0);
    console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      console.log(students.map(student => student.score).join());
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      console.log(students.map(student => student.score).sort((a,b) => a - b).join());
  }