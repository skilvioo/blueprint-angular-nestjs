import {NgModule} from '@angular/core';
import {ExpenseComponent} from './expense.component';
import {IonicModule} from '@ionic/angular';
import {ExpenseRoutingModule} from './expense-routing.module';
import {CoreModule} from '../../core/core.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';


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
    CommonModule,
    SharedModule,
  ]
})
export class ExpenseModule {}
