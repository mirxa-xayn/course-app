import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UsersLayoutComponent } from './layouts/users-layout/users-layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./routes/auth.routes').then((p) => p.AUTH_ROUTES),
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./routes/admin.routes').then((p) => p.ADMIN_ROUTES),
  },
  {
    path: 'users',
    component: UsersLayoutComponent,
    loadChildren: () =>
      import('./routes/users.routes').then((p) => p.USER_ROUTES),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];
