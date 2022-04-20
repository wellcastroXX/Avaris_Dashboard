import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'users-list',
    pathMatch: 'full'
  },
  {
    path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'users-list', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'drivers-list', loadChildren: () => import('./features/drivers/drivers.module').then(m => m.DriversModule)
  }
]