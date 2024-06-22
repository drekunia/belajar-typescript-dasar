import { Customer } from "../src/interface"
import { Employee, Manager } from "../src/employee"
import { sayHello } from "../src/say-hello"
import { Person } from "../src/person"

describe("interface", () => {
  it("works", () => {
    const customer: Customer = {
      id: 1,
      name: "World",
      nib: "1234567890",
      npwp: "1234567890",
    }

    customer.address = "asik"
    customer.name = "Andre"
    console.info(customer)
  })

  it("works 2", () => {
    interface AddFunction {
      (a: number, b: number): number
    }

    const add: AddFunction = (a: number, b: number): number => {
      return a + b
    }

    expect(add(2, 2)).toBe(4)
  })

  it("works 3", () => {
    interface StringArray {
      [index: number]: string
    }

    const arr: StringArray = ["a", "b", "c"]
    console.info(arr)
  })

  it("works 4", () => {
    interface Map {
      [key: string]: string
    }

    const arr: Map = {
      name: "Andre",
      address: "Meulaboh",
      age: "28",
    }

    expect(arr["name"]).toBe(arr.name)
  })

  it("works 5", () => {
    const employee: Employee = {
      id: 1,
      name: "World",
      address: "asik",
      age: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    console.info(employee)

    const manager: Manager = {
      id: 2,
      name: "Hello",
      address: "melaboh",
      age: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
      department: "IT",
      numberOfEmployees: 100,
    }

    console.info(manager)
  })

  it("works 6", () => {
    interface Person {
      name: string
      age: number
      sayHello(name: string): string
    }

    const person: Person = {
      name: "Andre",
      age: 1000,
      sayHello(name: string) {
        return `Hello, ${name}, my name is ${this.name}!`
      },
    }

    console.info(person.sayHello("World"))
  })

  it("works 7", () => {
    interface HasName {
      name: string
    }

    interface HasAge {
      age: number
    }

    type Domain = HasName & HasAge

    const domain: Domain = {
      name: "Andre",
      age: 1000,
    }

    console.info(domain)
  })

  it("works 8", () => {
    const person: any = {
      name: "Andre",
      age: 1000,
    }

    const person2: Person = person as Person

    console.info(person2)
  })
})
