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
import { ServiceAddComponent } from './components/service-add/service-add.component';
import { ServiceEditComponent } from './components/service-edit/service-edit.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { ReservationAddComponent } from './components/reservation-add/reservation-add.component';
import { WorkerlistComponent } from './components/reservation-add/workerlist/workerlist.component';
import { WorkerCardComponent } from './components/reservation-add/workerlist/worker-card/worker-card.component';
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterWorkerComponent } from './components/register-worker/register-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ServiceAddComponent,
    ServiceEditComponent,
    FilterPipe,
    FooterComponent,
    ReservationAddComponent,
    WorkerlistComponent,
    WorkerCardComponent,
    RegisterCompanyComponent,
    RegisterWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
