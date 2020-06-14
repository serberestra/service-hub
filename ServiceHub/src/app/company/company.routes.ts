import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RegisterWorkerComponent } from './components/register-worker/register-worker.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { AuthGuard } from '../services/auth.guard';
import { RoleGuard } from '../services/role.guard';

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
                ]
            }
        ]
    }
]