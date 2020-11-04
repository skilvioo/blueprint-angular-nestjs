import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, take} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {Expense} from '../models/expense.model';

@Injectable()
export class ExpenseService {

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/expenses/categories').pipe(
      catchError((error) => {
        console.log(error);
        return EMPTY;
      }),
      take(1),
    );
  }

  getVatRates(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/expenses/vat-rates').pipe(
      catchError((error) => {
        console.log(error);
        return EMPTY;
      }),
      take(1),
    );
  }

  getCurrencies(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/expenses/currencies').pipe(
      catchError((error) => {
        console.log(error);
        return EMPTY;
      }),
      take(1),
    );
  }

  postExpense(expense: Expense): Observable<any> {
    return this.httpClient.post(
      'http://localhost:3000/expenses',
      {
        expense,
      }
    ).pipe(
      catchError((error) => {
        return EMPTY;
      }),
      take(1),
    );
  }
}
