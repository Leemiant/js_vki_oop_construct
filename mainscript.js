/*function Student(n, s, m) {
  var name = n;
  var surname = s;
  var marks = m;
  
  var averageMarks = function() {
    var sum = 0;
    marks.forEach(function(m){
      sum += m;
    });
    return sum/marks.length;    
  }

  this.printDetails = function() {
    console.log('Name: ' + name + ' Surname: ' + surname + ' Average Marks: ' + averageMarks());
  }
}
var student1 = new Student('Artyom', "Gromtsev", [70]);
student1.printDetails();*/

class Student{ 
  constructor(name,DateofBirth,mark){ 
    this._name = name; 
    this._DateofBirth = DateofBirth; 
    this._mark = mark 
  } 
  toString(){ 
    return this._name + " " + 
    this._DateofBirth 
  } 
  valueOf(){ 
    return this._mark 
  } 
} 

class Group extends Student{
  constructor(name,DateofBirth,mark,group) {
    super(name,DateofBirth,mark);
    this._group = group;
  } 
  valueOf(){ 
    return this._mark 
  } 
}
let arr = [ 
s1 = new Group("Artyom Gromtsev", "10.01.2000", 5,"807cb"), 
s2 = new Group("Vadim Maksimov","27.11.2000",2,"807cb"),  
s3 = new Group("Andrey Kerov","12.03.2000", 3, "807cb"),
s4 = new Group("Denis Mishin","27.10.2000", 5, "807cb"),
s5 = new Group("Roman Konstantinov","13.09.2000",2,"807cb ")
]
let averageMarks = function() {
  let sum = 0;
  arr.forEach(function(element) {
    sum += element.valueOf();
  });
  return sum/arr.length;
}
console.table(arr.sort());
console.log("Средний балл студентов: " + averageMarks())
