"use strict";
// 🟩 Q01
const s6Users = {
    1: "Ali Zaid",
    2: "Affan Shaikh",
    3: "Sam",
};
const getName = (users, id) => {
    return users[id];
};
console.log(getName(s6Users, 1));
const s6Obj1 = {
    prop1: "This is an string prop",
    prop2: 22,
    prop3: false,
};
const printValue = (obj, key) => {
    return obj[key];
};
console.log(printValue(s6Obj1, "prop3"));
const s6Obj2 = {
    prop1: false,
    prop2: true,
    prop3: true,
    prop4: false,
    prop5: true,
};
const returnTrues = (obj) => {
    const trueKeys = [];
    for (const key in obj) {
        if (obj[key] === true) {
            trueKeys.push(key);
        }
    }
    return trueKeys;
};
console.log("Keys with true values are: ", returnTrues(s6Obj2));
const q4Obj = {
    food: 100,
    drinks: 30,
    traveling: 80,
};
const calcTotal = (obj) => {
    let total = 0;
    for (const key in obj) {
        total += obj[key];
    }
    return total;
};
console.log(calcTotal(q4Obj));
const stock = {
    "Samsung S24": 12,
    "LG Fridge": 16,
    "Puma Sheos": 30,
};
function resduceStock(stock, productName, value) {
    if (stock[productName] === undefined) {
        console.log("Product is not in stock!");
        return;
    }
    stock[productName] -= value;
    console.log(`Reduced Successfully, avalable stock of ${productName} is ${stock[productName]}`);
}
resduceStock(stock, "LG Fridge", 3);
resduceStock(stock, "Puma Sheos", 9);
