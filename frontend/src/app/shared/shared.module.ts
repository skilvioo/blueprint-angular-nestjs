import {NgModule} from '@angular/core';
import {ExpenseFormComponent} from './components/expense-form/expense-form.component';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ExpenseFormComponent
  ],
  imports: [
    IonicModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    ExpenseFormComponent,
  ],
})

export class SharedModule {}
