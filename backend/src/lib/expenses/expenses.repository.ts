import {HttpException, Injectable, Logger} from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class ExpensesRepository {
    private logger = new Logger('ExpensesRepository');

    async getCategories() {
        try {
            const pool = new Pool({ ssl: true });

            const res = await pool.query('SELECT * FROM "expenseCategory"');
            await pool.end();

            const categories = [];
            res.rows.forEach((result) => {
                categories.push(
                    result
                );
            });

            return categories;
        } catch (error) {
            this.logger.error('Unable to fetch categories', error);
            throw new HttpException(
                'Unable to fetch categories',
                500,
            );
        }
    }

    async getVatRates() {
        try {
            const pool = new Pool({ ssl: true });

            const res = await pool.query('SELECT * FROM "vatRate"');
            await pool.end();

            const vatRates = [];
            res.rows.forEach((result) => {
                vatRates.push(
                    result
                );
            });

            return vatRates;
        } catch (error) {
            this.logger.error('Unable to fetch vatRates', error);
            throw new HttpException(
                'Unable to fetch vatRates',
                500,
            );
        }
    }

    async getCurrencies() {
        try {
            const pool = new Pool({ ssl: true });

            const res = await pool.query('SELECT * FROM "currency"');
            await pool.end();

            const currencies = [];
            res.rows.forEach((result) => {
                currencies.push(
                    result
                );
            });

            return currencies;
        } catch (error) {
            this.logger.error('Unable to fetch currencies', error);
            throw new HttpException(
                'Unable to fetch currencies',
                500,
            );
        }
    }
}
