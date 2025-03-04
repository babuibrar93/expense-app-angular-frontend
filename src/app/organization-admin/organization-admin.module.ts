import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../core/pipes/date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationAdminRoutingModule } from './organization-admin.routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    DateFormatPipe,
    ReactiveFormsModule,
    OrganizationAdminRoutingModule,
  ],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class OrganizationAdminModule {}
