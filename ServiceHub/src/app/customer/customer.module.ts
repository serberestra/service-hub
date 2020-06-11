import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { SerivicelistComponent } from './reservation-add/service-list/service-list.component';
import { WorkerCardComponent } from './reservation-add/service-list/worker-card/worker-card.component';

// My routes
import { customerRoutes } from './customer.routes';

@NgModule({
  declarations: [
    ReservationAddComponent,
    SerivicelistComponent,
    WorkerCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
