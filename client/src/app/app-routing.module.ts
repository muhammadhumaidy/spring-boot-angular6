import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employeeListComponent', component: EmployeeListComponent },
  { path: 'employeeEditComponent', component: EmployeeEditComponent },
  { path: 'employeeEditComponent/:id', component: EmployeeEditComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
