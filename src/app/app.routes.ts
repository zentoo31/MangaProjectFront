import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DirectoryComponent } from './directory/directory/directory.component';
import { RequestsComponent } from './requests/requests.component';
import { MangaDetallesComponent } from './directory/manga-detalles/manga-detalles.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'home', component: DashboardComponent},
    {path:'directory/:counterPagination/:title', component: DirectoryComponent},
    {path:'directory/:counterPagination', component: DirectoryComponent},
    {path: 'manga/:id', component: MangaDetallesComponent},
    {path:'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path:'requests', component:RequestsComponent},
    {path: 'user', component: UserInfoComponent, canActivate: [authGuard]},
    {path:'', redirectTo: '/home',pathMatch:'full'},
    {path:'**', component: NotFoundComponent}
];