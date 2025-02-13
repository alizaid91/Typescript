"use strict";
// 🟧 Q01
const sum = (num1, num2) => {
    return num1 + num2;
};
// console.log(`The sum of 2 and 3 is ${sum(2, 3)}`); 🟩
// 🟧 Q02
const myFunc = (input, calback) => {
    const result = calback(input);
    console.log(`The out put of callback is ${result}`);
};
const myCallback = (str) => {
    return str.length;
};
const printName = (name) => {
    console.log(name.firstName && name.lastName
        ? `Welcome ${name.firstName} ${name.lastName}.`
        : "Welcome Unknown.");
};
const myName = {
    firstName: "Ali Zaid",
    lastName: "Shaikh",
};
// printName(myName); 🟩
// 🟧 Q 04
const findAvarage = (...nums) => {
    const sum = nums.reduce((sum, num) => sum + num, 0);
    const totalNums = nums.length;
    return sum / totalNums;
};
const nums = [1, 4, 5, 7, 9];
const filterProducts = (products, priceLimit, callback) => {
    return callback(products, priceLimit);
};
const filterCallback = (products, priceLimit) => {
    return products.filter((product) => product.price <= priceLimit ? product : "");
};
const products = [
    {
        id: 1,
        price: 799,
    },
    {
        id: 2,
        price: 599,
    },
    {
        id: 3,
        price: 1299,
    },
    {
        id: 4,
        price: 299,
    },
];
// const filteredProducts = filterProducts(products, 599, filterCallback);
// console.log(filteredProducts) 🟩
