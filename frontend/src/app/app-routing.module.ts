import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseModule } from './modules/expense/expense.module';

const routes: Routes = [
  {
    path: 'expense',
    loadChildren: () => ExpenseModule,
  },
  {
    path: '',
    redirectTo: '/expense',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
