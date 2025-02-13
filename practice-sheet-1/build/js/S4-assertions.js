"use strict";
// 🟧 Q 01
const upperCase = (input) => {
    return input === "" ? "Invalid Input" : input.toUpperCase();
};
// const input = prompt("Enter name: ") as string;
// console.log(upperCase(input));
// 🟧 Q 02
let myVar = "Shaikh Ali Zaid";
let myVar2 = myVar;
// console.log(upperCase(myVar2));
// console.log(upperCase(myVar as string));
// 🟧 Q 03
const myH1 = document.querySelector("#name-heading");
const updateH1 = (h1, newText) => {
    h1.innerText = newText;
};
updateH1(myH1, "This test is updated using TS");
// 🟧 Q 04
// 🟧 Q 05
const addOrConcate = (input) => {
    const input2 = 2;
    if (input.concat) {
        return input + input2.toString();
    }
    else {
        return input + input2;
    }
};
console.log(addOrConcate("2"));
console.log(addOrConcate(2));
