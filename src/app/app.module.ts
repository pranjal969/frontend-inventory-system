import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CategoryComponent } from './features/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardSidebarComponent } from './features/dashboard-sidebar/dashboard-sidebar.component';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './features/home/home.component';
import { MaterialsComponent } from './features/materials/materials.component';
import {MatSelectModule} from '@angular/material/select';
import { StockInComponent } from './features/stock-in/stock-in.component';
import { StockoutComponent } from './features/stockout/stockout.component';
import { VendorComponent } from './features/vendor/vendor.component';
import { DescriptionComponent } from './features/description/description.component';
import { ScrappingComponent } from './features/scrapping/scrapping.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';

import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule  } from 'ngx-ui-loader';
import { UpdateCategoryComponent } from './features/update-category/update-category.component';
import { UpdateMaterialsComponent } from './features/update-materials/update-materials.component';
import { AddMaterialsComponent } from './features/add-materials/add-materials.component';
import { AddCategoryComponent } from './features/add-category/add-category.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddStockinComponent } from './features/add-stockin/add-stockin.component';
import { UpdateStockinComponent } from './features/update-stockin/update-stockin.component';
import { AddStockoutComponent } from './features/add-stockout/add-stockout.component';
import { UpdateStockoutComponent } from './features/update-stockout/update-stockout.component';
import { AddVendorComponent } from './features/add-vendor/add-vendor.component';
import { UpdateVendorComponent } from './features/update-vendor/update-vendor.component';
import { AddDescriptionComponent } from './features/add-description/add-description.component';
import { UpdateDescriptionComponent } from './features/update-description/update-description.component';
import { AddScrappingComponent } from './features/add-scrapping/add-scrapping.component';
import { UpdateScrappingComponent } from './features/update-scrapping/update-scrapping.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CaseIdComponent } from './features/case-id/case-id.component';
import { RawMaterialComponent } from './features/raw-material/raw-material.component';
import { ConsumableStockComponent } from './features/consumable-stock/consumable-stock.component';
import {MatSortModule} from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CategoryComponent,
    NavbarComponent,
    FooterComponent,
    DashboardSidebarComponent,
    HomeComponent,
    MaterialsComponent,
    StockInComponent,
    StockoutComponent,
    VendorComponent,
    DescriptionComponent,
    ScrappingComponent,
    UpdateCategoryComponent,
    UpdateMaterialsComponent,
    AddMaterialsComponent,
    AddCategoryComponent,
    AddStockinComponent,
    UpdateStockinComponent,
    AddStockoutComponent,
    UpdateStockoutComponent,
    AddVendorComponent,
    UpdateVendorComponent,
    AddDescriptionComponent,
    UpdateDescriptionComponent,
    AddScrappingComponent,
    UpdateScrappingComponent,
    CaseIdComponent,
    RawMaterialComponent,
    ConsumableStockComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule,
    NgxUiLoaderModule,
    MatPaginatorModule,
    NgxMatSelectSearchModule,
    MatDatepickerModule,
    NgxUiLoaderHttpModule.forRoot(
      {
        showForeground:true,
      }
    ),
    MatTooltipModule,
    MatTableModule,
    MatSortModule

  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
