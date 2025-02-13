// 🟩 Q01

interface usersInfo {
  [key: number]: string;
}

const s6Users: usersInfo = {
  1: "Ali Zaid",
  2: "Affan Shaikh",
  3: "Sam",
};

const getName = (users: usersInfo, id: number): string | undefined => {
  return users[id];
};

console.log(getName(s6Users, 1));

// 🟩 Q02
interface myObj {
  prop1: string;
  prop2: number;
  prop3: boolean;
}

const s6Obj1: myObj = {
  prop1: "This is an string prop",
  prop2: 22,
  prop3: false,
};

const printValue = (obj: myObj, key: keyof myObj) => {
  return obj[key as keyof myObj];
};

console.log(printValue(s6Obj1, "prop3"));

// 🟩 Q03

interface myObj2 {
  [index: string]: boolean;
}

const s6Obj2 = {
  prop1: false,
  prop2: true,
  prop3: true,
  prop4: false,
  prop5: true,
};

const returnTrues = (obj: myObj2) => {
  const trueKeys: string[] = [];
  for (const key in obj) {
    if (obj[key] === true) {
      trueKeys.push(key);
    }
  }
  return trueKeys;
};

console.log("Keys with true values are: ", returnTrues(s6Obj2));

// 🟩 Q04

interface q4ObjType {
  [index: string]: number;
}

const q4Obj = {
  food: 100,
  drinks: 30,
  traveling: 80,
};

const calcTotal = (obj: q4ObjType): number => {
  let total = 0;
  for (const key in obj) {
    total += obj[key];
  }
  return total;
};

console.log(calcTotal(q4Obj));

// 🟩 Q05
type stockType = {
  [index: string]: number;
};

const stock: stockType = {
  "Samsung S24": 12,
  "LG Fridge": 16,
  "Puma Sheos": 30,
};

function resduceStock(
  stock: stockType,
  productName: keyof stockType,
  value: number
): void {
  if (stock[productName] === undefined) {
    console.log("Product is not in stock!");
    return;
  }
  stock[productName] -= value;
  console.log(
    `Reduced Successfully, avalable stock of ${productName} is ${stock[productName]}`
  );
}

resduceStock(stock, "LG Fridge", 3);
resduceStock(stock, "Puma Sheos", 9);