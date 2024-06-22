describe("switch", () => {
  it("works", () => {
    function testNumber(n: number): string {
      switch (n) {
        case 10:
          return "a = 10"
        case 5:
          return "a = 5"
        default:
          return "a = default"
      }
    }

    console.info(testNumber(5))
  })
})
