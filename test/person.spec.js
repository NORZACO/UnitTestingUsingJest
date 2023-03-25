const { Person, Employee, Customer } = require('../sum/person');

describe('Employee class', () => {
  test('creates an Employee object with the correct properties', () => {
    const employee = new Employee('John', 'Doe', 35, 'Software Developer', 100000);
    expect(employee.firstName).toBe('John');
    expect(employee.lastName).toBe('Doe');
    expect(employee.age).toBe(35);
    expect(employee.jobTitle).toBe('Software Developer');
    expect(employee.salary).toBe(100000);
  });
});

describe('Customer class', () => {
  test('creates a Customer object with the correct properties', () => {
    const customer = new Customer('Jane', 'Doe', 30, 'jane@example.com', '555-1234');
    expect(customer.firstName).toBe('Jane');
    expect(customer.lastName).toBe('Doe');
    expect(customer.age).toBe(30);
    expect(customer.email).toBe('jane@example.com');
    expect(customer.phoneNumber).toBe('555-1234');
  });
});

describe('Person class', () => {
  test('creates a Person object with the correct properties', () => {
    const person = new Person('Bob', 'Smith', 50);
    expect(person.firstName).toBe('Bob');
    expect(person.lastName).toBe('Smith');
    expect(person.age).toBe(50);
  });
});



// const { Person, Employee, Customer } = require('./person');

describe('Employee class', () => {
  test('creates an Employee object with the correct properties', () => {
    const employee = new Employee('John', 'Doe', 35, 'Software Developer', 100000);
    expect(employee.firstName).toBe('John');
    expect(employee.lastName).toBe('Doe');
    expect(employee.age).toBe(35);
    expect(employee.jobTitle).toBe('Manager'); // This will deliberately fail
    expect(employee.salary).toBe(100000);
  });
});

describe('Customer class', () => {
  test('creates a Customer object with the correct properties', () => {
    const customer = new Customer('Jane', 'Doe', 30, 'jane@example.com', '555-1234');
    expect(customer.firstName).toBe('Jane');
    expect(customer.lastName).toBe('Doe');
    expect(customer.age).toBe(30);
    expect(customer.email).toBe('jane@example.com');
    expect(customer.phoneNumber).toBe('555-1234');
  });
});

describe('Person class', () => {
  test('creates a Person object with the correct properties', () => {
    const person = new Person('Bob', 'Smith', 50);
    expect(person.firstName).toBe('Bob');
    expect(person.lastName).toBe('Smith');
    expect(person.age).toBe(50);
  });
});

