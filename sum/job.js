class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle, salary) {
        super(name, age);
        this.jobTitle = jobTitle;
        this.salary = salary;
    }
}

class Customer extends Person {
    constructor(name, age, email, phoneNumber) {
        super(name, age);
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}



// class Avaliable extends Person {
//     constructor(name, age, jobTitle, salary, email, phoneNumber) {
//         super(name, age);
//         this.jobTitle = jobTitle;
//         this.salary = salary;
//         this.email = email;
//         this.phoneNumber = phoneNumber;
//     }
// }

// let newDate = new Avaliable()
// console.log(newDate)

//    export
module.exports = {
    Person,
    Employee,
    Customer
}