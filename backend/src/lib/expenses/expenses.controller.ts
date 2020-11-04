import {Body, Controller, Get, Post, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {ExpensesService} from './expenses.service';
import {PostExpenseDTO} from './dto/post-expense.dto';

@Controller ('expenses')

export class ExpensesController {
    constructor(private expensesService: ExpensesService) {
    }

    @Post()
    @UsePipes(new ValidationPipe())
    postExpense(
        @Body() expense: PostExpenseDTO,
    ) {
        return this.expensesService.postExpense(expense);
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
