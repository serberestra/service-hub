import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "../app/components/not-found/not-found.component";
import { LoginComponent } from "../app/components/login/login.component";
import { RegisterComponent } from "../app/components/register/register.component";
import { ReservationAddComponent } from "../app/components/reservation-add/reservation-add.component";

const routes: Routes = [

  {path:"" , component: LoginComponent},
  {path:"login" , component: LoginComponent}, 
  {path:"useroptions" , component: NotFoundComponent},
  {path:"register" , component: RegisterComponent},
  {path:"reservationAdd" , component: ReservationAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
