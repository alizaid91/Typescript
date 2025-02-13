// 🟧 Q01
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

// console.log(`The sum of 2 and 3 is ${sum(2, 3)}`); 🟩

// 🟧 Q02
const myFunc = (input: string, calback: (str: string) => number): void => {
  const result = calback(input);
  console.log(`The out put of callback is ${result}`);
};

const myCallback = (str: string): number => {
  return str.length;
};

// myFunc("Hello My name is Ali Zaid.", myCallback); 🟩

// 🟧 Q03
type nameType = {
  firstName?: string;
  lastName?: string;
};

const printName = (name: nameType): void => {
  console.log(
    name.firstName && name.lastName
      ? `Welcome ${name.firstName} ${name.lastName}.`
      : "Welcome Unknown."
  );
};

const myName: nameType = {
  firstName: "Ali Zaid",
  lastName: "Shaikh",
};

// printName(myName); 🟩

// 🟧 Q 04
const findAvarage = (...nums: number[]): number => {
  const sum = nums.reduce((sum, num) => sum + num, 0);
  const totalNums = nums.length;
  return sum / totalNums;
};

const nums: number[] = [1, 4, 5, 7, 9];

// console.log(`Avarage of ${nums} is ${findAvarage(...nums)}`); 🟩

// 🟧 Q 05
type productType = {
  id: number;
  price: number;
};

type calbackType = (
  products: productType[],
  priceLimit: number
) => productType[];

const filterProducts = (
  products: productType[],
  priceLimit: number,
  callback: calbackType
): productType[] => {
  return callback(products, priceLimit);
};

const filterCallback = (products: productType[], priceLimit: number) => {
  return products.filter((product) =>
    product.price <= priceLimit ? product : ""
  );
};

const products: productType[] = [
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

