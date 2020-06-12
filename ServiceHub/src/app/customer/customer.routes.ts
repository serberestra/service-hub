import { Routes } from '@angular/router';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { AuthGuard } from '../services/auth.guard';
import { ReservationRequestOldComponent } from './reservation-request-old/reservation-request-old.component';


export const customerRoutes: Routes = [
    {
        path: 'customer',
        component: ReservationAddComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'reservation',
                component: ReservationRequestOldComponent,
                children: [
                    { path: "reservationAdd", component: ReservationAddComponent },
                    { path: "reservationOld", component: ReservationRequestOldComponent },
                ]
            }
        ]
    }
]