/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr.map(arr => {
    if (arr.marks > 50) {
      console.log(arr.name + ' ' + arr.marks);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr => {
    if (arr.marks > 50) {
      console.log(arr.name + ' ' + arr.marks);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newData = {
    id: 4,
    name: "susan",
    age: 20,
    marks: 45
  };
  arr.push(newData);
  console.log(newData)
}

function removeFailedStudent() {
  //Write your code here, just console.log
   arr = arr.filter(student => student.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
   let newArr = [
    {id: 4, name: "Sapna", age: 21, marks: 65},
    {id: 5, name: "Mohan", age: 25, marks: 43},
    {id: 6, name: "Nagar", age: 26, marks: 76}
  ];
  let concatenatedArr = arr.concat(newArr);
  console.log(concatenatedArr);
}
