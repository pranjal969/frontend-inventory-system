import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './features/add-category/add-category.component';
import { AddMaterialsComponent } from './features/add-materials/add-materials.component';
import { CategoryComponent } from './features/category/category.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DescriptionComponent } from './features/description/description.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { MaterialsComponent } from './features/materials/materials.component';
import { ScrappingComponent } from './features/scrapping/scrapping.component';
import { StockInComponent } from './features/stock-in/stock-in.component';
import { StockoutComponent } from './features/stockout/stockout.component';
import { UpdateCategoryComponent } from './features/update-category/update-category.component';
import { UpdateMaterialsComponent } from './features/update-materials/update-materials.component';
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
      {
        path: 'update-materials/:materialId',
        component: UpdateMaterialsComponent
      },
      {
        path: 'add-materials',
        component: AddMaterialsComponent
      },
      {
        path: 'update-category/:categoryId',
        component: UpdateCategoryComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent
      },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
