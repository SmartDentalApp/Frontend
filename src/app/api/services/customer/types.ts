export interface ICustomerPostRequestModel {
  Email: string
  Name: string
  CPF: string
  BirthDate: string
  RG: string
  Address: string
  DateTreatmentStart: string
}

export interface ICustomersGetResponseModel {
  id: number
  email: string
  name: string
  cpf: string
  birthDate: string
  rg: string
  address: string
  treatmentStartDate: string
}