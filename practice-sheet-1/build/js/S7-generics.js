"use strict";
// 🟩 Q01
// const returnFirstElement = <T>(array: T[]) => {
//   return array[0];
// };
function returnFirstElement(array) {
    return array[0];
}
console.log(returnFirstElement(["Ali", "Zaid", "Shaikh", 4]));
// 🟩 Q2
class Box {
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
    set(value) {
        this.value = value;
    }
}
const s7Obj = new Box("Shaikh");
console.log(s7Obj.get());
s7Obj.set("Ali Zaid Shakh");
console.log(s7Obj.get());
// 🟩 Q03
const mergeObjects = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
const obj1 = {
    name: "Ali Zaid",
    age: 20,
};
const obj2 = {
    job: "Engineer",
    isActive: true,
};
console.log(mergeObjects(obj1, obj2));
const logData = (response) => {
    if (response.status === "success") {
        console.log(response.data);
    }
    else {
        console.log("An error occured");
    }
};
const response = {
    status: "success",
    data: "Data loaded successfully!",
};
logData(response);
// 🟩 Q 05
const findMax = (array) => {
    if (typeof array[0] === "string") {
        let largest = "";
        for (const element of array) {
            if (element.length > largest.length) {
                largest = element;
            }
        }
        return largest;
    }
    let largest = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
};
console.log(findMax([1, 5, 40, 10, 7, 9, 49, 0]));
console.log(findMax(["Ali", "Zaid", "Ali Zaid", "Shaikh Ali Zaid"]));
