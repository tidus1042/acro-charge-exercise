import { Injectable } from '@angular/core';
import { CRUD } from './CRUD';
import { environment } from '../../environments/environment.prod';
import { Customer } from "./Customer";

const CUSTOMER_URL = `${environment.baseUrl}/customer`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  crud: CRUD;

  constructor() {
    this.crud = new CRUD(CUSTOMER_URL);
  }

  getAllCustomers() {
    return this.crud.getAllDocuments();
  }

  createNewCustomer(customer: Customer) {
    return this.crud.createNewDocument(customer);
  }

  updateCustomer(customer: Customer) {
    return this.crud.updateDocument(customer);
  }

  deleteCustomer(customerId: string) {
    return this.crud.deleteDocument(customerId);
  }
}
