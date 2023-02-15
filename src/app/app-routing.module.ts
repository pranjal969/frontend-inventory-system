import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './features/category/category.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { MaterialsComponent } from './features/materials/materials.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  
 
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[  {
      path:'',
      component:HomeComponent
    },
      {
        path:'categories',
        component:CategoryComponent
      },
      {
        path:'material',
        component:MaterialsComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
