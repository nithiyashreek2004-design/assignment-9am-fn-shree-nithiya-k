const { createBrotliCompress } = require("node:zlib");

class product {
    constructor(id,name,price){
        this.id =id;
        this.name = name;
        this.price = price;
    }
}
class user {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    greet(){
        return`welcome, ${this.name}!`;
    }
}
class cart{
    constructor(product){
        this.name =[];
    }
    addproduct(product){
        this.item.push(product);
    }
}
const p1 = new product(1,"laptop",49000);
console.log(p1);
const u1 = new user("shree","shree@example.com");
console.log(u1.greet());
const cart = new Cart();
cart.addProduct(new Product(1, "Mobile", 15000));
console.log("cart details:"cart);