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

export interface UserFormData {
  id?: number;
  name?: string;
  email?: string;
  birthdate?: string;
  phone?: string;
  country?: string;
  state?: string;
  street?: string;
  number?: string;
  avatar?: string;
}
