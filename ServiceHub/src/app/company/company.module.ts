import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { RegisterWorkerComponent } from './components/register-worker/register-worker.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { WorkerListComponent } from './components/company-page/worker-list/worker-list.component';
import { UpdateFormComponent } from './components/company-page/update-form/update-form.component';

// My routes
import { companyRoutes } from './company.routes';

@NgModule({
  declarations: [
    LayoutComponent,
    RegisterWorkerComponent,
    CompanyPageComponent,
    WorkerListComponent,
    UpdateFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(companyRoutes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CompanyModule { }
