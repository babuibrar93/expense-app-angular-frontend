import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomePanelComponent } from './welcome-panel/welcome-panel.component';

@NgModule({
  imports: [CommonModule, RouterOutlet],
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
