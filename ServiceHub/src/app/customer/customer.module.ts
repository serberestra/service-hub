import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { SerivicelistComponent } from './reservation-add/service-list/service-list.component';
import { WorkerCardComponent } from './reservation-add/service-list/worker-card/worker-card.component';

// My routes
import { customerRoutes } from './customer.routes';
import { ReservationRequestOldComponent } from './reservation-request-old/reservation-request-old.component';
import { LayoutComponent } from './layout/layout.component';

// Angular material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ReservationAddComponent,
    SerivicelistComponent,
    WorkerCardComponent,
    ReservationRequestOldComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class CustomerModule { }
