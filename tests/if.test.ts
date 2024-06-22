describe("if", () => {
  it("works", () => {
    const a = 10

    if (a > 5) {
      console.info("a > 5")
    } else {
      console.info("a <= 5")
    }
  })

  it("works 2", () => {
    const a = 10
    const say = a > 5 ? "a > 5" : "a <= 5"
    console.info(say)
  })
})
