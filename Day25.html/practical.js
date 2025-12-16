const numbers =[10,20,30,80];
const total =numbers.reduce((sum, num) =>{
    return sum + num;
});
console.log("Total",total);


const ages =[12,18,22,32,16,19,24,];
const adults = ages.filter(age => age >= 18);
console.log(adults);

class Student {
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
    }
    display(){
        return` NAME: ${this.name} scored: ${this.marks}`;
    }
}
const s1 = new Student("sam",95);
const s2 = new Student("siva",80);
const s3 = new Student("sharuk",75);
console.log(s1.display());
console.log(s2.display());
console.log(s3.display());

const a = [1,6];
const b = [5,4];
const combined = a.concat(b);
console.log(combined);




