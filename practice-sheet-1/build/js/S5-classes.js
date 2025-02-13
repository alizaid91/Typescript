"use strict";
// 🟧 Q1
class User {
    constructor(id, name, email) {
        this.greet = () => {
            console.log("Hello", this.name);
        };
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
const newUser = new User(1, "Shaikh Ali Zaid", "email@gmail.com");
newUser.greet();
// 🟧 Q2
class Product {
    constructor(id, name, price) {
        this.price = 0;
        this.id = id;
        this.name = name;
        this.price = price;
    }
    applyDiscount(percentage) {
        if (this.price <= 0) {
            console.log("To apply discount, product price must be greater than 0!");
        }
        else {
            //Discounted Price=Original Price−(Original Price×Discount Percentage/100)
            this.price = this.price - (this.price * percentage) / 100;
            console.log(`Discount applied successfully new price of ${this.name} is ${this.price}`);
        }
    }
}
const laptop = new Product(2, "Apple Macbook M1 2020", 799);
laptop.applyDiscount(50);
// 🟧 Q3
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    isClassicModel() {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - this.year;
        if (carAge > 20) {
            console.log(`${this.make} ${this.model} is a classic model!`);
        }
        else {
            console.log(`${this.make} ${this.model} is not a classic model!`);
        }
    }
}
const mustang = new Car("Ford", "Mustang GT", 1969);
mustang.isClassicModel();
const prius = new Car("Toyota", "Prius Prime", 2017);
prius.isClassicModel();
// 🟧 Q5
class BankAccount {
    constructor(accountNumber, balance, ownerName) {
        this.deposit = (amount) => {
            if (amount <= 0) {
                console.log("The deposit amount must be greater than 0.");
                return;
            }
            this.balance += amount;
            console.log(`${amount} deposited successfully! \nAvailable balance is ${this.balance}`);
        };
        this.withdraw = (amount) => {
            if (amount <= 0) {
                console.log("The withdraw amount must be greater than 0");
                return;
            }
            else if (amount > this.balance) {
                console.log(`Can not withdraw ${amount} Insufficient Fund!`);
                return;
            }
            this.balance = this.balance - amount;
            console.log(`${amount} withdrawn successfully. \nAvilable balence is ${this.balance}`);
        };
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownerName = ownerName;
    }
}
const account1 = new BankAccount(12231795, 799, "Shaikh Ali Zaid");
account1.deposit(100);
account1.withdraw(199);
account1.withdraw(500);
account1.deposit(0);
