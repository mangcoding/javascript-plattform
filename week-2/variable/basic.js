'use strict';

/* 'let' is used to declare block-scoped variables in JavaScript. */

let message = "Hallo welcome to javascript";

function sayHallo() {
    let message = "Hallo this is local variable";
    console.log(message);
}

sayHallo();
console.log(message);

const fullname = "Nugraha";
//fullname = "Budi Santoso"; it will throw an error

function callName(fullname) {
    console.log(fullname); //the output will be Randi
    fullname = "Budi Santoso"; //it override the fullname variable
    console.log(fullname); //the output will be Budi Santoso
}

callName("Randi");