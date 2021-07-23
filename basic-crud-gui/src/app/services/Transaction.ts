export interface Transaction {
  _id: string;
  totalPrice: string;
  currency: string;
  creditCardType: string;
  creditCardNumber: string;
  customerId: string;
}

export interface BackEndTransaction {
  totalPrice: string;
  currency: string;
  creditCardType: string;
  creditCardNumber: string;
  customerId: string;
}
