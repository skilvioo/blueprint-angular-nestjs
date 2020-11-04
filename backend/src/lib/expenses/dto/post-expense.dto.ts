import {Category} from '../../models/category.model';
import {Currency} from '../../models/currency.model';
import {VatRate} from '../../models/vat-rate.model';
import {IsDate, IsNumber, IsString} from 'class-validator';

export class PostExpenseDTO {
    @IsString()
    uid: string;
    @IsDate()
    date: Date;
    @IsString()
    description: string;
    @IsNumber()
    amount: number;
    @IsNumber()
    vat: number;
    @IsNumber()
    totalAmount: number;
    category: Category;
    currency: Currency;
    vatRate: VatRate;
}
