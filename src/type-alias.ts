export type Category = {
  id: number
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

export type Product = {
  id: number
  name: string
  description: string
  price: number
  category: Category
  createdAt: Date
  updatedAt: Date
}
