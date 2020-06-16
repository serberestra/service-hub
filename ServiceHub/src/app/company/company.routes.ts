import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RegisterWorkerComponent } from './components/register-worker/register-worker.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { AuthGuard } from '../services/auth.guard';
import { ServiceHistoryComponent } from './components/company-page/service-history/service-history.component';
import { RoleGuard } from '../services/role.guard';

/**
 * Defines routes to be taken within company module
 * Sets roleguards and authguards to ensure user is a legitimate company user
 * Routes to Main company page, service history and worker creation.
 */
export const companyRoutes: Routes = [
    {
        path: 'company',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                data: { role: 'company' },
                canActivate: [RoleGuard],
                redirectTo: 'workers',
                pathMatch: 'full',
            },
            {
                path: '',
                data: { role: 'company' },
                canActivate: [RoleGuard],
                children: [
                    { path: "workers", component: CompanyPageComponent },
                    { path: "registerWorker", component: RegisterWorkerComponent },
                    { path: "serviceHistory", component: ServiceHistoryComponent }
                ]
            }
        ]
    }
]