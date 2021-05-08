import { Routes } from '@angular/router';
import { LoginComponent, HomeComponent } from '@app/pages';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: LoginComponent,
  },
];
