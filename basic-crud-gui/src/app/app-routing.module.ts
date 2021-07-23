import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './components/transaction/transaction.component';

const appRoutes: Routes = [
  {path: 'transaction', component: TransactionComponent},
  {path: '', component: TransactionComponent},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
