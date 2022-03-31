import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { UserSignedInGuard } from './utils/guards/user-signed-in.guard';
import { UserNotSignedInGuard } from './utils/guards/user-not-signed-in.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserNotSignedInGuard],
    loadChildren: () =>
      import('./features/auth/sign-in/sign-in.module').then(
        (m) => m.SignInModule
      ),
  },
  {
    path: 'register',
    canActivate: [UserNotSignedInGuard],
    loadChildren: () =>
      import('./features/auth/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      ),
  },
  {
    path: 'dashboard',
    canActivate: [UserSignedInGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard-home.module').then(
        (m) => m.DashboardHomeModule
      ),
  },
  {
    path: 'dashboard/product/:id',
    canActivate: [UserSignedInGuard],
    loadChildren: () =>
      import('./features/product-edit/product-edit.module').then(
        (m) => m.ProductEditModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
