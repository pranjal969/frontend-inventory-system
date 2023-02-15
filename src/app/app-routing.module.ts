import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
