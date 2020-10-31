import {Injectable} from '@nestjs/common';
import {ExpensesRepository} from './expenses.repository';

@Injectable()

export class ExpensesService {
    constructor(
        private expenseRepository: ExpensesRepository
    ) {
    }

    getCategories() {
        return this.expenseRepository.getCategories();
    }

    getVatRates() {
        return this.expenseRepository.getVatRates();
    }

    getCurrencies() {
        return this.expenseRepository.getCurrencies();
    }

}
