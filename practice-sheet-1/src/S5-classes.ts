// 🟧 Q1
class User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  greet = () => {
    console.log("Hello", this.name);
  };
}

const newUser: User = new User(1, "Shaikh Ali Zaid", "email@gmail.com");
newUser.greet();

// 🟧 Q2
class Product {
  id: number | undefined;
  name: string | undefined;
  price: number = 0;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  applyDiscount(percentage: number) {
    if (this.price <= 0) {
      console.log("To apply discount, product price must be greater than 0!");
    } else {
      //Discounted Price=Original Price−(Original Price×Discount Percentage/100)
      this.price = this.price - (this.price * percentage) / 100;
      console.log(
        `Discount applied successfully new price of ${this.name} is ${this.price}`
      );
    }
  }
}

const laptop: Product = new Product(2, "Apple Macbook M1 2020", 799);
laptop.applyDiscount(50);

// 🟧 Q3
class Car {
  make: string | undefined;
  model: string | undefined;
  year: number | undefined;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  isClassicModel() {
    const currentYear = new Date().getFullYear();
    const carAge = currentYear - (this.year as number);
    if (carAge > 20) {
      console.log(`${this.make} ${this.model} is a classic model!`);
    } else {
      console.log(`${this.make} ${this.model} is not a classic model!`);
    }
  }
}

const mustang: Car = new Car("Ford", "Mustang GT", 1969);
mustang.isClassicModel();

const prius: Car = new Car("Toyota", "Prius Prime", 2017);
prius.isClassicModel();

// 🟧 Q5
class BankAccount {
  accountNumber: number;
  balance: number;
  ownerName: string;

  constructor(accountNumber: number, balance: number, ownerName: string) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.ownerName = ownerName;
  }

  deposit = (amount: number): void => {
    if (amount <= 0) {
      console.log("The deposit amount must be greater than 0.");
      return;
    }
    this.balance += amount;
    console.log(
      `${amount} deposited successfully! \nAvailable balance is ${this.balance}`
    );
  };

  withdraw = (amount: number): void => {
    if (amount <= 0) {
      console.log("The withdraw amount must be greater than 0");
      return;
    } else if (amount > this.balance) {
      console.log(`Can not withdraw ${amount} Insufficient Fund!`);
      return;
    }

    this.balance = this.balance - amount;
    console.log(
      `${amount} withdrawn successfully. \nAvilable balence is ${this.balance}`
    );
  };
}

const account1: BankAccount = new BankAccount(12231795, 799, "Shaikh Ali Zaid");
account1.deposit(100);
account1.withdraw(199);
account1.withdraw(500);
account1.deposit(0);
