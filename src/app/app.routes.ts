import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
    {path:'home', component: DashboardComponent},
    {path:'login', component: LoginComponent},
    {path:'', redirectTo: '/home',pathMatch:'full'},
    {path:'**', component: NotFoundComponent}
];