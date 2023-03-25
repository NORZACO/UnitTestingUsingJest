const { Person, Employee, Customer } = require('../sum/job');

describe('Employee class', () => {
  test('creates an Employee object with the correct properties', () => {
    const employee = new Employee('John Doe', 35, 'Software Developer', 100000);
    expect(employee.name).toBe('John Doe');
    expect(employee.age).toBe(35);
    expect(employee.jobTitle).toBe('Software Developer');
    expect(employee.salary).toBe(100000);
  });
});

describe('Customer class', () => {
  test('creates a Customer object with the correct properties', () => {
    const customer = new Customer('Jane Doe', 30, 'jane@example.com', '555-1234');
    expect(customer.name).toBe('Jane Doe');
    expect(customer.age).toBe(30);
    expect(customer.email).toBe('jane@example.com');
    expect(customer.phoneNumber).toBe('555-1234');
  });
});

describe('Person class', () => {
  test('creates a Person object with the correct properties', () => {
    const person = new Person('Bob', 50);
    expect(person.name).toBe('Bob');
    expect(person.age).toBe(50);
  });
});
