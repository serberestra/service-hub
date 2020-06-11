import { Routes } from '@angular/router';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';


export const customerRoutes: Routes = [
    {
        path: 'customer',
        component: ReservationAddComponent,
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