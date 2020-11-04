import {Injectable} from '@nestjs/common';
import {ExpensesRepository} from './expenses.repository';
import {Expense} from '../models/expense.model';

@Injectable()

export class ExpensesService {
    constructor(
        private expenseRepository: ExpensesRepository
    ) {
    }

    postExpense(expense: Expense) {
        return this.expenseRepository
            .insertExpense(expense);
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
