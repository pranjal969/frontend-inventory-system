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
    MatListModule,
    MatSelectModule

  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
