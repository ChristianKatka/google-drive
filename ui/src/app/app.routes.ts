import { Routes } from '@angular/router';
import { HomeComponent } from '../Home/home.component';
import { AuthenticatedGuard } from '../Auth/guards/authenticated.guard';
import { UnauthenticatedGuard } from '../Auth/guards/unauthenticated.guard';
import { LoginComponent } from '../Auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [AuthenticatedGuard],
    component: HomeComponent,
  },
  {
    path: 'login',
    canActivate: [UnauthenticatedGuard],
    component: LoginComponent,
  },
];
