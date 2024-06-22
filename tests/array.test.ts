describe("array", () => {
  it("works", () => {
    let name: string[] = ["world"]
    let balance: number[] = [1000]
    let isActive: boolean[] = [true]

    console.info(name, balance, isActive)
  })

  it("works 2", () => {
    const readonlyarray: readonly string[] = ["world", "hello"] // readonly array

    console.info(readonlyarray)
  })

  it("works 3", () => {
    let tupleSatu: [string, number, boolean] = ["world", 1000, true]

    tupleSatu[0] = "asik"

    console.info(tupleSatu)
  })
})
