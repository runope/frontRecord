// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     printName(){
//         console.log(this.name)
//     }
//     sharedMethod() {
//         console.log('sharedMethod');
//     }
// }

// class Student extends Person {
//     constructor(name, score){
//         super(name)
//         this.score = score
//     }

//     printScore() {
//         console.log(this.score);
//     }
// }
// let stu = new Student('小红');
// let person = new Person('小紫');
// console.log(stu.commonMethods===person.commonMethods);//true

function Person(name) {
    this.name = name
    this.printName = function() {
        console.log(this.name);
    }
}

Person.prototype.sharedMethod = function() {
    console.log('sharedMethod');
}

function Student(name, score) {
    Person.call(this, name)
    this.score = score
    this.printScore = function() {
        console.log(this.score);
    }
}

function Func(haha) {
    this.haha=haha
}

Student.prototype = new Person
let person = new Person('小紫',80);
let stu = new Student('小红',100);
let stu2 = new Student('小hei',90);
// console.log(stu.printName===person.printName);//false
// console.log(stu.commonMethods===person.commonMethods);//true
console.log(typeof Func.prototype);
console.log(Person.prototype.printName);
console.log(Student.prototype.__proto__);
console.log(typeof stu.__proto__);
console.log(Object.prototype.toString);
// console.log(stu.sharedMethod===stu2.sharedMethod) // true
