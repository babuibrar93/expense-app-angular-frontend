import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AllUsersComponent } from './users/users.component';
import { UsersRoutingModule } from './user.routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, UsersRoutingModule],
  exports: [],
  declarations: [AllUsersComponent],
  providers: [],
})
export class UserModule {}
