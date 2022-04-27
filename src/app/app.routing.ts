import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'users-list',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'drivers-list', loadChildren: () => import('./features/drivers/drivers.module').then(m => m.DriversModule),
    // canActivate: [AuthGuard]
  }
]