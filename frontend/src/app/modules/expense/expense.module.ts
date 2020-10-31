import {NgModule} from '@angular/core';
import {ExpenseComponent} from './expense.component';
import {IonicModule} from '@ionic/angular';
import {ExpenseRoutingModule} from './expense-routing.module';
import {CoreModule} from '../../core/core.module';


@NgModule({
  declarations: [
    ExpenseComponent,
  ],
  providers: [],
  exports: [],
  imports: [
    IonicModule,
    ExpenseRoutingModule,
    CoreModule,
  ]
})
export class ExpenseModule {}
