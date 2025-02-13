// 🟩 Q01

// const returnFirstElement = <T>(array: T[]) => {
//   return array[0];
// };

function returnFirstElement<T>(array: T[]) {
  return array[0];
}

console.log(returnFirstElement(["Ali", "Zaid", "Shaikh", 4]));

// 🟩 Q2

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  set(value: T) {
    this.value = value;
  }
}

const s7Obj: Box<string> = new Box("Shaikh");

console.log(s7Obj.get());
s7Obj.set("Ali Zaid Shakh");
console.log(s7Obj.get());

// 🟩 Q03

const mergeObjects = <T extends object, R extends object>(obj1: T, obj2: R) => {
  return { ...obj1, ...obj2 };
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

// 🟩 Q04
interface MyResponse<T> {
  status: "success" | "error";
  data: T;
}

const logData = <T>(response: MyResponse<T>): void => {
  if (response.status === "success") {
    console.log(response.data);
  } else {
    console.log("An error occured");
  }
};

const response: MyResponse<string> = {
  status: "success",
  data: "Data loaded successfully!",
};

logData(response);

// 🟩 Q 05
const findMax = <T>(array: T[]) => {
  if (typeof array[0] === "string") {
    let largest = "";
    for (const element of array as string[]) {
      if (element.length > largest.length) {
        largest = element;
      }
    }
    return largest;
  }

  let largest = 0;
  for (let i = 0; i <= array.length; i++) {
    if ((array[i] as number) > largest) {
      largest = array[i] as number;
    }
  }
  return largest;
};

console.log(findMax([1, 5, 40, 10, 7, 9, 49, 0]));
console.log(findMax(["Ali", "Zaid", "Ali Zaid", "Shaikh Ali Zaid"]));
