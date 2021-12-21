export interface Address {
  country: string;
  state: string;
  street: string;
  number: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  image: string;
  birthdate: string;
  phone: string;
  address: Address;
}
