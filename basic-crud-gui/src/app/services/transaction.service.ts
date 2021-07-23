import { Injectable } from '@angular/core';
import { CRUD } from './CRUD';
import { BackEndTransaction, Transaction } from './Transaction';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const TRANSACTION_URL = `${environment.dbBrokerUrl}/transaction`;

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  crud: CRUD;

  constructor() {
    this.crud = new CRUD(TRANSACTION_URL);
  }

  getAllTransactions(): Observable<Transaction[]> {
    return this.crud.getAllDocuments();
  }

  createNewTransaction(transaction: BackEndTransaction) {
    return this.crud.createNewDocument(transaction);
  }

  updateTransaction(transaction: Transaction) {
    return this.crud.updateDocument(transaction);
  }

  deleteTransaction(transactionId: string) {
    return this.crud.deleteDocument(transactionId);
  }
}
