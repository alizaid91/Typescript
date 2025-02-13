// 🟧 Q 01
const upperCase = (input: string): string => {
  return input === "" ? "Invalid Input" : input.toUpperCase();
};

// const input = prompt("Enter name: ") as string;
// console.log(upperCase(input));

// 🟧 Q 02
let myVar: unknown = "Shaikh Ali Zaid";
let myVar2: string = myVar as string;

// console.log(upperCase(myVar2));
// console.log(upperCase(myVar as string));

// 🟧 Q 03

const myH1: HTMLElement = document.querySelector(
  "#name-heading"
) as HTMLElement;

const updateH1 = (h1: HTMLElement, newText: string): void => {
  h1.innerText = newText;
};

updateH1(myH1, "This test is updated using TS");

// 🟧 Q 04

// 🟧 Q 05
const addOrConcate = (input: string | number): string | number => {
  const input2 = 2;
  if ((input as string).concat) {
    return (input as string) + input2.toString();
  } else {
    return (input as number) + input2;
  }
};
console.log(addOrConcate("2"));
console.log(addOrConcate(2));
