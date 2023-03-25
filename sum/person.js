// person.js

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  
  class Employee extends Person {
    constructor(firstName, lastName, age, jobTitle, salary) {
      super(firstName, lastName, age);
      this.jobTitle = jobTitle;
      this.salary = salary;
    }
  }
  
  class Customer extends Person {
    constructor(firstName, lastName, age, email, phoneNumber) {
      super(firstName, lastName, age);
      this.email = email;
      this.phoneNumber = phoneNumber;
    }
  }
  
  module.exports = { Person, Employee, Customer };
  