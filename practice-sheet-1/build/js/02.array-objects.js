"use strict";
//🟧 Q.01
const productPrices = [299, 149, 99, 799, 29, 59];
const calculateTotal = (prices) => {
    return prices.reduce((total, price) => total + price, 0);
};
const user2 = {
    name: "Shaikh Ali Zaid",
    age: 20,
    gender: "Male",
    email: "ali@gmail.com",
};
const printUserInfo = (user) => {
    console.log(`Welcome ${user.name}! 
        \nYour are ${user.age} years onle, 
        \nYour gender is ${user.gender}, 
        \nYour email is ${user.email}
        `);
};
// printUserInfo(user2);
//🟧 Q.03
const user3 = {
    name: "Affan Shaikh",
    age: 16,
    gender: "Male",
    email: "affan@gmail.com",
};
const usersArray = [user2, user3];
const extractNames = (users) => {
    return users.map((user) => user.name);
};
// console.log("Names are", extractNames(usersArray));
//🟧 Q.04
const coordinates = [40.7128, -74.006];
const printCoordinates = (coordinates) => {
    console.log(`Latitude: ${coordinates[0]}, Longitudes: ${coordinates[1]}`);
};
// printCoordinates(coordinates);
//🟧 Q.05
const languages = [
    "Java",
    "C++",
    "C#",
    "Javascript",
    "Python",
    "Typescript",
];
const isTypescriptExist = (langs) => {
    for (const l of langs) {
        if (l.toLowerCase() === "typescript")
            return true;
    }
    return false;
};
console.log(isTypescriptExist(languages));
