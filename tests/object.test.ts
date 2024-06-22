describe("object", () => {
  it("works", () => {
    const person: { name: string; age: number; isActive: boolean } = {
      name: "world",
      age: 1000,
      isActive: true,
    }
    console.info(person)
  })
})
