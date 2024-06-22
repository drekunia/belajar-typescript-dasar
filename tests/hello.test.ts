import { sayHello } from "../src/say-hello"

describe("hello", () => {
  it("works", () => {
    expect(sayHello("world")).toBe("Hello, world!")
  })
})
