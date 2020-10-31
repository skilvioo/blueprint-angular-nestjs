import {Controller, Get} from '@nestjs/common';
import {ExpensesService} from './expenses.service';

@Controller ('expenses')

export class ExpensesController {
    constructor(private expensesService: ExpensesService) {
    }

    @Get('categories')
    getCategories() {
        return this.expensesService.getCategories();
    }

    @Get('vat-rates')
    getVatRates() {
        return this.expensesService.getVatRates();
    }

    @Get('currencies')
    getCurrencies() {
        return this.expensesService.getCurrencies();
    }
}
