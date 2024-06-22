import { CustomerType, Customer } from "../src/enum"

describe("enum", () => {
  it("works", () => {
    const customer: Customer = {
      id: 1,
      name: "World",
      type: CustomerType.INDIVIDUAL,
    }

    console.info(customer)
  })
})
