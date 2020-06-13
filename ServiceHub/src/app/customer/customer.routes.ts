import { Routes } from '@angular/router';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { AuthGuard } from '../services/auth.guard';
import { ReservationRequestOldComponent } from './reservation-request-old/reservation-request-old.component';
import { LayoutComponent } from "./layout/layout.component";


export const customerRoutes: Routes = [
    {
        path: 'customer',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: "reservationAdd", component: ReservationAddComponent },
                    { path: "reservationOld", component: ReservationRequestOldComponent },
                ]
            }
        ]
    }
]