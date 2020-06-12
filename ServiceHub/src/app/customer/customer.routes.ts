import { Routes } from '@angular/router';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { AuthGuard } from '../services/auth.guard';


export const customerRoutes: Routes = [
    {
        path: 'customer',
        component: ReservationAddComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: "reservationAdd", component: ReservationAddComponent },
                ]
            }
        ]
    }
]