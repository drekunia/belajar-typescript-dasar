describe("while", () => {
  it("works", () => {
    let i = 0
    while (i < 10) {
      console.info(i)
      i++
    }
  })

  it("works 2", () => {
    let i = 0
    do {
      console.info(i)
      i++
    } while (i < 10)
  })

  it("works 3", () => {
    let i = 0

    do {
      i++
      if (i == 10) break
      if (i % 2 == 0) continue
      console.info(i)
    } while (true)
  })
})
