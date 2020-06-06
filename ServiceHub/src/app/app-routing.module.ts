import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "../app/components/not-found/not-found.component";
import { LoginComponent } from "../app/components/login/login.component";
import { RegisterComponent } from "../app/components/register/register.component";
import { ReservationAddComponent } from "../app/components/reservation-add/reservation-add.component";
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterWorkerComponent } from './components/register-worker/register-worker.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "useroptions", component: NotFoundComponent },
  { path: "register", component: RegisterComponent },
  { path: "registerCompany", component: RegisterCompanyComponent },
  { path: "registerWorker", component: RegisterWorkerComponent },
  { path: "reservationAdd", component: ReservationAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
