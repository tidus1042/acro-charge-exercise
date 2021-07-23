// all angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import 'hammerjs';

// all app modules
import { MaterialModule } from './_modules';
import { routing } from './app-routing.module';

// all components
import { AppComponent } from './components/app.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionRowComponent } from './transaction-row/transaction-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TransactionRowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
