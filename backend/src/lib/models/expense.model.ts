import {Category} from './category.model';
import {Currency} from './currency.model';
import {VatRate} from './vat-rate.model';

export class Expense {
    uid: string;
    date: Date;
    description: string;
    amount: number;
    vat: number;
    totalAmount: number;
    category: Category;
    currency: Currency;
    vatRate: VatRate;

    constructor(
      uid: string,
      date: Date,
      description: string,
      amount: number,
      vat: number,
      totalAmount: number,
      category: Category,
      currency: Currency,
      vatRate: VatRate,
    ) {
      this.uid = uid;
      this.date = date;
      this.description = description;
      this.amount = amount;
      this.vat = vat;
      this.totalAmount = totalAmount;
      this.category = category;
      this.currency = currency;
      this.vatRate = vatRate;
    }
}
