import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './layout/layout.component';
import { RegisterWorkerComponent } from './components/register-worker/register-worker.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { WorkerListComponent } from './components/company-page/worker-list/worker-list.component';
import { UpdateFormComponent } from './components/company-page/update-form/update-form.component';
import { ServiceHistoryComponent } from "./components/company-page/service-history/service-history.component";
// My routes
import { companyRoutes } from './company.routes';

// Angular material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    LayoutComponent,
    RegisterWorkerComponent,
    CompanyPageComponent,
    WorkerListComponent,
    UpdateFormComponent,
    ServiceHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(companyRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CompanyModule { }
