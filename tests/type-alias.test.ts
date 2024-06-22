import { Product } from "../src/type-alias"

describe("type-alias", () => {
  it("works", () => {
    const product: Product = {
      id: 1,
      name: "Product 1",
      description: "Product 1 description",
      price: 1000,
      category: {
        id: 1,
        name: "Category 1",
        description: "Category 1 description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    console.info(product)
  })
})
