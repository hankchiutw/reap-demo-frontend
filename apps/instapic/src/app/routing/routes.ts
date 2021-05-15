import { Routes } from '@angular/router';
import { LoginComponent } from '@app/pages';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadChildren: () => import('@app/pages/home').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
];
