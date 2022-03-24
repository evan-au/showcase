import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserNotSignedInGuard } from './utils/guards/admin-user-not-signed-in.guard';
import { AdminUserSignedInGuard } from './utils/guards/admin-user-signed-in.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminUserSignedInGuard],

    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [AdminUserNotSignedInGuard],

    loadChildren: () =>
      import('./features/dashboard/dashboard-home.module').then(
        (m) => m.DashboardHomeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
