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
    canActivate: [AuthGuard], // Protect routes
    canMatch: [AuthGuard], // Lazy-loaded protection
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
        path: '', // Example: Dashboard route inside default layout
        loadChildren: () =>
          import('./super-admin/super-admin.module').then((m) => m.SuperAdminModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './core/guards/auth.guard';
// import { GuestGuard } from './core/guards/guest.guard';
// import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
// import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

// const routes: Routes = [
//   // Auth Routes (For Guests Only)
//   {
//     path: 'auth',
//     component: AuthLayoutComponent,
//     canActivate: [GuestGuard],
//     canMatch: [GuestGuard],
//     loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
//   },

//   // Protected Routes (For Authenticated Users)
//   {
//     path: '',
//     component: DefaultLayoutComponent,
//     canActivate: [AuthGuard],
//     canMatch: [AuthGuard],
//     children: [
//       {
//         path: 'component',
//         loadChildren: () =>
//           import('./custom-components/custom-components.module').then(
//             (m) => m.CustomComponentsModule
//           ),
//       },
//       {
//         path: 'dashboard', // Example: Dashboard route inside default layout
//         loadChildren: () =>
//           import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
//       },
//       { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect to default page
//     ],
//   },

//   // Catch-All Route (Handles 404)
//   { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       onSameUrlNavigation: 'reload', // Reload if navigating to the same URL
//       scrollPositionRestoration: 'enabled', // Maintain scroll position
//       anchorScrolling: 'enabled', // Enable anchor scrolling
//       useHash: false, // Use clean URLs
//     }),
//   ],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
