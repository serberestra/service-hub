import { Routes } from '@angular/router';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { WorkerCardComponent } from './reservation-add/service-list/worker-card/worker-card.component';
import { AuthGuard } from '../services/auth.guard';


export const customerRoutes: Routes = [
    {
        path: 'customer',
        component: ReservationAddComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "worker",
                component: WorkerCardComponent
                // path: '',
                // children: [
                //     { path: "worker", component: WorkerCardComponent },
                // ]
            }
        ]
    }
]