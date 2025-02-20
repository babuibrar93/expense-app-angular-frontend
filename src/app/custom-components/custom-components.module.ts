import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponentsComponent } from './components/custom-components.component';
import { CustomComponentsRoutingModule } from './custom-components-routing-module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CustomComponentsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CustomComponentsRoutingModule,
  ],
})
export class CustomComponentsModule {}
