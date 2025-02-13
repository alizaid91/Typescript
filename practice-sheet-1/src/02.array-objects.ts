//🟧 Q.01
const productPrices: number[] = [299, 149, 99, 799, 29, 59];

const calculateTotal = (prices: number[]): number => {
  return prices.reduce((total, price) => total + price, 0);
};

// console.log(`Total value of products is $${calculateTotal(productPrices)}.`);

//🟧 Q.02
type userType = {
  name: string;
  age: number;
  gender: string;
  email: string;
};

const user2: userType = {
  name: "Shaikh Ali Zaid",
  age: 20,
  gender: "Male",
  email: "ali@gmail.com",
};

const printUserInfo = (user: userType): void => {
  console.log(`Welcome ${user.name}! 
        \nYour are ${user.age} years onle, 
        \nYour gender is ${user.gender}, 
        \nYour email is ${user.email}
        `);
};
// printUserInfo(user2);

//🟧 Q.03
const user3: userType = {
  name: "Affan Shaikh",
  age: 16,
  gender: "Male",
  email: "affan@gmail.com",
};

const usersArray: userType[] = [user2, user3];

const extractNames = (users: userType[]): string[] => {
  return users.map((user) => user.name);
};

// console.log("Names are", extractNames(usersArray));

//🟧 Q.04
const coordinates: number[] = [40.7128, -74.006];

const printCoordinates = (coordinates: number[]): void => {
  console.log(`Latitude: ${coordinates[0]}, Longitudes: ${coordinates[1]}`);
};

// printCoordinates(coordinates);

//🟧 Q.05

const languages: string[] = [
  "Java",
  "C++",
  "C#",
  "Javascript",
  "Python",
  "Typescript",
];

const isTypescriptExist = (langs: string[]): boolean => {
  for (const l of langs) {
    if (l.toLowerCase() === "typescript") return true;
  }
  return false;
};

console.log(isTypescriptExist(languages));
