import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RegisterWorkerComponent } from './components/register-worker/register-worker.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { AuthGuard } from '../services/auth.guard';

export const companyRoutes: Routes = [
    {
        path: 'company',
        component: CompanyPageComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: "registerWorker", component: RegisterWorkerComponent },
                ]
            }
        ]
    }
]