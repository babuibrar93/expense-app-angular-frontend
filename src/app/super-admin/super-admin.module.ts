import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { SuperAdminRoutingModule } from './super-admin.routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, SuperAdminRoutingModule],
  exports: [DashboardComponent],
  declarations: [
    DashboardComponent,
    OrganizationsComponent,
    OrganizationDetailComponent,
    CreateOrganizationComponent,
  ],
  providers: [],
})
export class SuperAdminModule {}
