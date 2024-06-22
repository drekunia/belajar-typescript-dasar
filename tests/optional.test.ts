describe("optional", () => {
  it("works", () => {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello, ${name}!`)
      } else {
        console.info("Hello, World!")
      }
    }

    sayHello("andre")
    const name: string | undefined | null = undefined

    sayHello(name)
    sayHello(null)
  })
})
