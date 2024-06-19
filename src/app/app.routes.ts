import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { NouvelleTourneeComponent } from './nouvelle-tournee/nouvelle-tournee.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'nouvelle-tournee', component: NouvelleTourneeComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: '/dashboard' }
];
