import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { CRUD } from './CRUD';
import { Transaction } from './Transaction';

const TRANSACTION_URL = `${environment.baseUrl}/transaction`;

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  crud: CRUD;

  constructor() {
    this.crud = new CRUD(TRANSACTION_URL);
  }

  getAllCustomers() {
    return this.crud.getAllDocuments();
  }

  createNewCustomer(transaction: Transaction) {
    return this.crud.createNewDocument(transaction);
  }

  updateCustomer(transaction: Transaction) {
    return this.crud.updateDocument(transaction);
  }

  deleteCustomer(transactionId: string) {
    return this.crud.deleteDocument(transactionId);
  }
}
