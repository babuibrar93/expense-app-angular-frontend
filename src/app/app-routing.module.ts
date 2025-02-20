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
    canMatch: [GuestGuard],
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'component',
        loadChildren: () =>
          import('./custom-components/custom-components.module').then(
            (m) => m.CustomComponentsModule
          ),
        canActivate: [AuthGuard], // Protect routes
        canMatch: [AuthGuard], // Lazy-loaded protection
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
