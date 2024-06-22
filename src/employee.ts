export interface Employee {
  id: number
  name: string
  address: string
  age: number
  createdAt: Date
  updatedAt: Date
}

export interface Manager extends Employee {
  department: string
  numberOfEmployees: number
}
