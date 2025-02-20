import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomePanelComponent } from './welcome-panel/welcome-panel.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  imports: [CommonModule, SharedModule, RouterOutlet],
  exports: [HeaderComponent, SidebarComponent, WelcomePanelComponent],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    WelcomePanelComponent,
    AuthLayoutComponent,
    DefaultLayoutComponent,
  ],
  providers: [],
})
export class LayoutModule {}
