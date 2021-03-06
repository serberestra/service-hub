import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Module To import Company
import { CompanyModule } from '../app/company/company.module';
import { CustomerModule } from '../app/customer/customer.module';
import { MainComponent } from './components/main/main.component';
// Modules Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    FilterPipe,
    FooterComponent,
    RegisterCompanyComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CompanyModule,
    CustomerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    [{ provide: APP_BASE_HREF, useValue: '/' }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
