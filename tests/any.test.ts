describe("any", () => {
  it("works", () => {
    const person: any = { name: "world" }
    person.age = 1000
    person.isActive = true
    console.info(person)
  })
})
