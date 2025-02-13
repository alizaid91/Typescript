//🟧 Q.01
let age: number;
const validateAge = (inputAge: number): void => {
  if (isNaN(inputAge) || inputAge === 0) {
    alert("Invalid age!");
    return;
  }
  if (inputAge < 18) {
    console.log(`Your age is ${inputAge}, You are not eligible to vote now!`);
  } else {
    console.log(`Your age is ${inputAge}, You can vote!`);
  }
};

// age = Number(prompt("Enter you age: "));
// validateAge(age); 🟩

//🟧 Q.02
const productName: string = "Samsung S24 FE";

const capitalize = (input: string): string => {
  return input.toUpperCase();
};

// console.log("Capitalizes name:", capitalize(productName)); 🟩

//🟧 Q.03
type user = {
  name: string;
  isAdmin: boolean;
};

const user1 = <user>{
  name: "Shaikh Ali Zaid",
  isAdmin: true,
};

const checkAdmin = (inputUser: user): void => {
  if (inputUser.isAdmin) {
    console.log(`User ${inputUser.name} is admin!`);
  } else {
    console.log(`User ${inputUser.name} is not admin!`);
  }
};

// checkAdmin(user1); 🟩

//🟧 Q.04
const myNum: number = 12;
const myStr: string = "I am Ali Zaid";
function evaluateStrOrNum(variable: string | number): number {
  if (typeof variable === "string") {
    return variable.length;
  } else {
    return variable * variable;
  }
}

// console.log(evaluateStrOrNum(myStr)); 🟩
// console.log(evaluateStrOrNum(myNum)); 🟩

//🟧 Q.05
const currentDate: Date = new Date();

const checkDate = (date: Date) => {
  const day: number = date.getDay();
  if (day % 6 === 0) {
    console.log("Given date is Weekend!", date.toDateString().split(" ")[0]);
  } else {
    console.log("Given date is Weekday!", date.toDateString().split(" ")[0]);
  }
};

// checkDate(currentDate); 🟩
