import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DirectoryComponent } from './directory/directory/directory.component';
import { RequestsComponent } from './requests/requests.component';
import { MangaDetallesComponent } from './directory/manga-detalles/manga-detalles.component';
export const routes: Routes = [
    {path:'home', component: DashboardComponent},
    {path:'directory', component: DirectoryComponent},
    {path: 'directory/:id', component: MangaDetallesComponent},
    {path:'login', component: LoginComponent},
    {path:'requests', component:RequestsComponent},
    {path:'', redirectTo: '/home',pathMatch:'full'},
    {path:'**', component: NotFoundComponent}
];