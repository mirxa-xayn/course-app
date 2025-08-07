import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../features/auth/pages/login/login.component').then(
        (p) => p.LoginComponent
      ),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('../features/auth/pages/sign-up/sign-up.component').then(
        (p) => p.SignUpComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];
