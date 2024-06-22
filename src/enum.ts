export enum CustomerType {
  INDIVIDUAL = "individual",
  BUSINESS = "business",
}

export type Customer = {
  id: number
  name: string
  type: CustomerType
}
