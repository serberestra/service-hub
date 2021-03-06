import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "../app/components/main/main.component";
import { NotFoundComponent } from "../app/components/not-found/not-found.component";
import { LoginComponent } from "../app/components/login/login.component";
import { RegisterComponent } from "../app/components/register/register.component";
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { ReservationAddComponent } from "./customer/reservation-add/reservation-add.component";

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
  { path: "main", component: MainComponent },
  { path: "login", component: LoginComponent },
  { path: "useroptions", component: NotFoundComponent },
  { path: "register", component: RegisterComponent },
  { path: "registerCompany", component: RegisterCompanyComponent },
  // { path: "reservationAdd", component: ReservationAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
