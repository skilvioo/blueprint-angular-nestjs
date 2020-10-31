import {NgModule} from '@angular/core';
import {ExpenseService} from './services/expense.service';


@NgModule({
  imports: [],
  providers: [
    ExpenseService,
  ],
})
export class CoreModule {}
