import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { BackEndTransaction, Transaction } from '../../services/Transaction';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  columns: string[] = ['ID', 'Total Price', 'Currency', 'Credit Card Type', 'Credit Card Number', 'Customer Id'];
  fields: string[] = ['_id', 'totalPrice', 'currency', 'creditCardType', 'creditCardNumber', 'customerId'];
  displayedColumns: string[] = ['totalPrice', 'currency', 'creditCardType', 'creditCardNumber', 'customerId', 'actions'];
  dataSource: MatTableDataSource<Transaction>;
  newTrans: Transaction;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private transactionService: TransactionService) {
    this.refreshPage();
    this.newTrans = {
      _id: '',
      totalPrice: '',
      currency: '',
      creditCardType: '',
      creditCardNumber: '',
      customerId: ''
    };
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

  refreshPage() {
    this.transactionService.getAllTransactions().subscribe((transactions) => {
      this.dataSource = new MatTableDataSource<Transaction>(transactions);
      this.dataSource.paginator = this.paginator;
    });
  }

  createNewTransaction(transaction: Transaction) {
    const backEndTransaction: BackEndTransaction = {
      totalPrice: transaction.totalPrice,
      currency: transaction.currency,
      creditCardType: transaction.creditCardType,
      creditCardNumber: transaction.creditCardNumber,
      customerId: transaction.customerId
    };
    this.transactionService.createNewTransaction(backEndTransaction).subscribe(() => {
      this.refreshPage();
    });
  }

  updateTransaction(transaction: Transaction) {
    this.transactionService.updateTransaction(transaction).subscribe(() => {
      this.refreshPage();
      transaction['edit'] = false;
    });
  }

  deleteTransaction(transaction: Transaction) {
    this.transactionService.deleteTransaction(transaction._id).subscribe(() => {
      this.refreshPage();
    });
  }

}
