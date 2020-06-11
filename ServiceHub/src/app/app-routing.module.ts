import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "../app/components/not-found/not-found.component";
import { LoginComponent } from "../app/components/login/login.component";
import { RegisterComponent } from "../app/components/register/register.component";
import { RegisterCompanyComponent } from './components/register-company/register-company.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "useroptions", component: NotFoundComponent },
  { path: "register", component: RegisterComponent },
  { path: "registerCompany", component: RegisterCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
