class user {
  constructor(name,email,) {
    this.name = name;
    this.email = email;
  }

Login(){
    return `${this.name} has logged in successfully`;
}
}
const user1 = new user("shree","shree@example.com");
console.log(user1.Login());

//---------------------------------------------------------
class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposited ₹${amount}. New Balance: ₹${this.balance}`;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return `balance! Available: ₹${this.balance}`;
    }
    this.balance -= amount;
    return `Withdrawn ₹${amount}. New Balance: ₹${this.balance}`;
  }
}

// Creating an account
const acc1 = new BankAccount("Shree", 5000);

// Using methods
console.log(acc1.deposit(2000));
console.log(acc1.withdraw(1000));
console.log(acc1.withdraw(7000));   // Trying more than balance

//------------------------------------------------------------------------
const product1 = {
  name: "Laptop",
  price: 55000,
  brand: "Dell"
};
const product2 = {
  name: "Headphones",
  price: 2000,
  brand: "Sony"
};
//destructing
const { name, price, brand } = product1;
console.log(name);
console.log(price);
console.log(brand);

//-------------------------------------------------------------------------
function vehicle(type){
    this.type = type;
}
vehicle.prototype.start = function(){
    return`${this.type}is starting...`;
};
function Car(brand,type){
    vehicle.call(this.type);
    this.brand = brand;
}
Car.prototype = Object.create
