import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../../core/models/category.model';
import {Currency} from '../../../core/models/currency.model';
import {VatRate} from '../../../core/models/vat-rate.model';
import {Expense} from '../../../core/models/expense.model';
import uuidv4 from 'uuidv4';

@Component({
  selector: 'app-expense-form-component',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  @Input() categories: Category[];
  @Input() currencies: Currency[];
  @Input() vatRates: VatRate[];
  @Output() formSubmission: EventEmitter<Expense> = new EventEmitter<Expense>();

  expenseForm: FormGroup;

  ngOnInit(): void {
    this._setForm();
  }

  private _setForm(): void {
    this.expenseForm = new FormGroup(
      {
        date: new FormControl(new Date()),
        description: new FormControl(''),
        amount: new FormControl(0),
        vat: new FormControl(0),
        totalAmount: new FormControl(0),
        categoryUid: new FormControl(''),
        currencyUid: new FormControl(''),
        vatRateUid: new FormControl('')
      }
    );
  }

  private _getCategoryFrom(uid): Category {
    return this.categories
      .filter(category => category.uid === uid)[0];
  }
  private _getCurrencyFrom(uid): Currency {
    return this.currencies
      .filter(currency => currency.uid === uid)[0];
  }
  private _getVatRateFrom(uid): VatRate {
    return this.vatRates
      .filter(vatRate => vatRate.uid === uid)[0];
  }

  private _submitValue(formValue): void {
    const category: Category = this._getCategoryFrom(formValue.categoryUid);
    const currency: Currency = this._getCurrencyFrom(formValue.currencyUid);
    const vatRate: VatRate = this._getVatRateFrom(formValue.vatRateUid);
    const expenseUid = uuidv4();
    const expense = new Expense(
      expenseUid,
      formValue.date,
      formValue.description,
      formValue.amount,
      formValue.vat,
      formValue.totalAmount,
      category,
      currency,
      vatRate,
    );
    this.formSubmission.emit(expense);
  }

  handleOnSubmitButtonClick(event): void {
    this._submitValue(event);
  }

}
