import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './features/category/category.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DescriptionComponent } from './features/description/description.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { MaterialsComponent } from './features/materials/materials.component';
import { ScrappingComponent } from './features/scrapping/scrapping.component';
import { StockInComponent } from './features/stock-in/stock-in.component';
import { StockoutComponent } from './features/stockout/stockout.component';
import { VendorComponent } from './features/vendor/vendor.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  
 
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AdminGuard],
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
      {
        path:'stockin',
        component:StockInComponent
      },
      
      {
        path:'stockout',
        component:StockoutComponent
      },
      {
        path:'vendor',
        component:VendorComponent
      },
      {
        path:'description',
        component:DescriptionComponent
      },
      {
        path:'scrapping',
        component:ScrappingComponent
      },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
