import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
    path: 'login',
    component: LoginComponent,
},
{
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./home/home.routes').then(d => d.routes),

}];
