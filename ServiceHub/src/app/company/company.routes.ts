import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RegisterWorkerComponent } from './components/register-worker/register-worker.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { AuthGuard } from '../services/auth.guard';
<<<<<<< HEAD
import { ServiceHistoryComponent } from './components/company-page/service-history/service-history.component';
=======
import { RoleGuard } from '../services/role.guard';
>>>>>>> e78cd1e25844ec4d352f2bdb8d60ca56d0d8cb7c

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
                redirectTo: 'main',
                pathMatch: 'full',
            },
            {
                path: '',
                data: { role: 'company' },
                canActivate: [RoleGuard],
                children: [
                    { path: "main", component: CompanyPageComponent },
                    { path: "registerWorker", component: RegisterWorkerComponent },
                    { path: "serviceHistory", component: ServiceHistoryComponent }
                ]
            }
        ]
    }
]