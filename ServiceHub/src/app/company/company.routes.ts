import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RegisterWorkerComponent } from './components/register-worker/register-worker.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { AuthGuard } from '../services/auth.guard';
import { ServiceHistoryComponent } from './components/company-page/service-history/service-history.component';

export const companyRoutes: Routes = [
    {
        path: 'company',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: "main", component: CompanyPageComponent },
                    { path: "registerWorker", component: RegisterWorkerComponent },
                    { path: "serviceHistory", component: ServiceHistoryComponent }
                ]
            }
        ]
    }
]