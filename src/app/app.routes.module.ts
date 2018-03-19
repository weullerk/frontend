import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormComponent } from './modules/form/form.component';
import { ListComponent } from './modules/list/list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
      path: 'dashboard',
      component: DashboardComponent
  },
  {
      path: 'form',
      component: FormComponent
  },
  {
      path: 'list',
      component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutesModule { }
