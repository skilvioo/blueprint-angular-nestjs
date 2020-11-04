import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {VatRate} from '../../core/models/vat-rate.model';
import {Currency} from '../../core/models/currency.model';
import {Category} from '../../core/models/category.model';
import {ExpenseService} from '../../core/services/expense.service';
import {Expense} from '../../core/models/expense.model';

@Component({
  selector: 'app-expense-component',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit{
  categories$: Observable<Category[]>;
  vatRates$: Observable<VatRate[]>;
  currencies$: Observable<Currency[]>;

  constructor(
    private expenseService: ExpenseService,
  ) {

  }
  ngOnInit(): void {
    this._initObservable();
  }

  private _initObservable(): void {
    this.categories$ = this.expenseService.getCategories();
    this.vatRates$ = this.expenseService.getVatRates();
    this.currencies$ = this.expenseService.getCurrencies();
  }

  private _postExpense(expense: Expense): void {
    this.expenseService.postExpense(expense).subscribe();
  }

  onFormSubmission(expense: Expense): void {
     this._postExpense(expense);
  }
}
