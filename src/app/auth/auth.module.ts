import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, LayoutModule, SharedModule, ReactiveFormsModule],
  exports: [],
  declarations: [RegisterComponent, LoginComponent],
  providers: [],
})
export class AuthModule {}
