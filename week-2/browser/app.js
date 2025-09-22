// alert("Welcome to simple javascript application");
let $name = prompt("Enter your name");
alert("Your name is " + $name);

let isStudent = confirm("Are you a student?");
alert("You are a student: " + isStudent);

const nameEl = document.querySelector("#name");
const isStudentEl = document.querySelector("#isStudent");

nameEl.textContent = $name;
isStudentEl.textContent = isStudent ? "Yes" : "No";