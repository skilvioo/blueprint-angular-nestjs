import {Component, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../../core/models/category.model';
import {Currency} from '../../../core/models/currency.model';
import {VatRate} from '../../../core/models/vat-rate.model';

@Component({
  selector: 'app-expense-form-component',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  @Input() categories: Category[];
  @Input() currencies: Currency[];
  @Input() vatRates: VatRate[];

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
    )
  }

}
