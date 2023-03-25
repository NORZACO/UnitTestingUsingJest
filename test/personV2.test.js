
const { Person, Employee, Customer } = require('../sum/person');

describe('Employee class', () => {
  test('creates an Employee object with the correct properties', () => {
    const employee = new Employee('John', 'Doe', 35, 'Software Developer', 100000);
    expect(employee.firstName).toEqual('John');
    expect(employee.lastName).toEqual('Doe');
    expect(employee.age).toBeGreaterThanOrEqual(35);
    expect(employee.jobTitle).toMatch(/developer/i);
    expect(employee.salary).toBeGreaterThan(50000);
  });
});

describe('Customer class', () => {
  test('creates a Customer object with the correct properties', () => {
    const customer = new Customer('Jane', 'Doe', 30, 'jane@example.com', '555-1234');
    expect(customer.firstName).toBeDefined();
    expect(customer.lastName).toBeDefined();
    expect(customer.age).toBeLessThan(40);
    expect(customer.email).toMatch(/@example.com$/);
    expect(customer.phoneNumber).toContain('-');
  });
});

describe('Person class', () => {
  test('creates a Person object with the correct properties', () => {
    const person = new Person('Bob', 'Smith', 50);
    expect(person.firstName).toBeTruthy();
    expect(person.lastName).toBeTruthy();
    expect(person.age).toBe(50);
  });
});
