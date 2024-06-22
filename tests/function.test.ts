import { sayHello } from "../src/say-hello"
describe("Function", () => {
  it("works", () => {
    function sayHello(name: string): string {
      return `Hello, ${name}!`
    }

    expect(sayHello("world")).toBe("Hello, world!")

    function printHello(name: string): void {
      console.info(sayHello(name))
    }

    printHello("world")
  })

  it("works 2", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello, ${name}!`
    }

    expect(sayHello()).toBe("Hello, Guest!")
  })

  it("works 3", () => {
    function sum(...values: number[]): number {
      let total = 0

      for (const value of values) {
        total += value
      }

      return total
    }

    expect(sum(1, 2, 3)).toBe(6)
  })

  it("works 4", () => {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello, ${firstName} ${lastName}!`
      } else {
        return `Hello, ${firstName}!`
      }
    }

    expect(sayHello("Andre")).toBe("Hello, Andre!")
    expect(sayHello("Andre", "Kurniawan")).toBe("Hello, Andre Kurniawan!")
  })

  it("works 5", () => {
    function callMe(name: string): string
    function callMe(number: number): number
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase()
      } else if (typeof value === "number") {
        return value * 2
      }
    }

    expect(callMe("hello")).toBe("HELLO")
    expect(callMe(10)).toBe(20)
  })

  it("works 6", () => {
    function sayHello(name: string, filter: (name: string) => string): string {
      return "Hello, " + filter(name)
    }

    function toUpper(name: string): string {
      return name.toUpperCase()
    }

    function exclaim(name: string): string {
      return name + "!"
    }

    expect(sayHello("world", toUpper)).toBe("Hello, WORLD")
    expect(
      sayHello("world", (name: string): string => {
        return name + "!"
      })
    ).toBe("Hello, world!")
  })
})
