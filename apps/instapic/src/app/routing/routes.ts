import { Routes } from '@angular/router';
import { HomeComponent, LoginComponent } from '@app/pages';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
];
