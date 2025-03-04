import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [GuestGuard],
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'component',
        loadChildren: () =>
          import('./custom-components/custom-components.module').then(
            (m) => m.CustomComponentsModule
          ),
      },
      {
        path: 'users',
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: '', // Example: Dashboard route inside default layout
        loadChildren: () =>
          import('./organization-admin/organization-admin.module').then(
            (m) => m.OrganizationAdminModule
          ),
        // loadChildren: () =>
        //   import('./super-admin/super-admin.module').then((m) => m.SuperAdminModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
