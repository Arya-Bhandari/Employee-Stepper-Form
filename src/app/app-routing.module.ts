import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './constant/app-route.constant';
import { StepsComponent } from './component/steps/steps.component';
import { EmpTableComponent } from './component/emp-table/emp-table.component';

const routes: Routes = [
  {path: AppRoutes.steps, component: StepsComponent},
  {path: AppRoutes.empTable, component: EmpTableComponent},
  {path: '', redirectTo: AppRoutes.empTable, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
