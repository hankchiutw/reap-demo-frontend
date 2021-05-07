import { Routes } from '@angular/router';
import { LoginComponent, HomeComponent } from '../pages';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  },
];
