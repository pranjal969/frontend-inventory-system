import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './features/add-category/add-category.component';
import { AddDescriptionComponent } from './features/add-description/add-description.component';
import { AddMaterialsComponent } from './features/add-materials/add-materials.component';
import { AddScrappingComponent } from './features/add-scrapping/add-scrapping.component';
import { AddStockinComponent } from './features/add-stockin/add-stockin.component';
import { AddStockoutComponent } from './features/add-stockout/add-stockout.component';
import { AddVendorComponent } from './features/add-vendor/add-vendor.component';
import { CaseIdComponent } from './features/case-id/case-id.component';
import { CategoryComponent } from './features/category/category.component';
import { ConsumableStockComponent } from './features/consumable-stock/consumable-stock.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DescriptionComponent } from './features/description/description.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { MaterialsComponent } from './features/materials/materials.component';
import { RawMaterialComponent } from './features/raw-material/raw-material.component';
import { ScrappingComponent } from './features/scrapping/scrapping.component';
import { StockInComponent } from './features/stock-in/stock-in.component';
import { StockoutComponent } from './features/stockout/stockout.component';
import { UpdateCategoryComponent } from './features/update-category/update-category.component';
import { UpdateDescriptionComponent } from './features/update-description/update-description.component';
import { UpdateMaterialsComponent } from './features/update-materials/update-materials.component';
import { UpdateScrappingComponent } from './features/update-scrapping/update-scrapping.component';
import { UpdateStockinComponent } from './features/update-stockin/update-stockin.component';
import { UpdateStockoutComponent } from './features/update-stockout/update-stockout.component';
import { UpdateVendorComponent } from './features/update-vendor/update-vendor.component';
import { VendorComponent } from './features/vendor/vendor.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuardGuard } from './services/normal-guard.guard';




const routes: Routes = [
  {
    path: '',
    canActivate:[NormalGuardGuard],
    children:[  {
      path:'',
      component:LoginComponent
    },]
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
      {
        path: 'update-stockin/:stockinId',
        component: UpdateStockinComponent
      },
      {
        path: 'add-stockin',
        component: AddStockinComponent
      },
      {
        path: 'update-stockout/:stockoutId',
        component: UpdateStockoutComponent
      },
      {
        path: 'add-stockout',
        component: AddStockoutComponent
      },
      {
        path: 'update-vendor/:vendorId',
        component: UpdateVendorComponent
      },
      {
        path: 'add-vendor',
        component: AddVendorComponent
      },
      {
        path: 'update-description/:descriptionId',
        component: UpdateDescriptionComponent
      },
      {
        path: 'add-description',
        component: AddDescriptionComponent
      },
      {
        path: 'update-scrapping/:scrappingId',
        component: UpdateScrappingComponent
      },
      {
        path: 'add-scrapping',
        component: AddScrappingComponent
      },
      {
        path: 'caseid',
        component: CaseIdComponent
      },
      {
        path: 'raw-material',
        component: RawMaterialComponent
      },
      {
        path: 'consumable',
        component: ConsumableStockComponent
      },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
