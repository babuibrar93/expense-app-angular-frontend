import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

interface SubModule {
  name: string;
}

interface Module {
  name: string;
  icon: string;
  route: string;
  subModules?: SubModule[];
}
@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    trigger('sidebarState', [
      state('open', style({ width: '256px' })), // Open state width
      state('closed', style({ width: '64px' })), // Closed state width
      transition('open <=> closed', animate('300ms ease-in-out')), // Smooth transition
    ]),
  ],
})
export class SidebarComponent {
  isSidebarOpen = true;
  activeModule: string | null = null;

  // Create an event emitter to send data to the parent
  @Output() sidebarToggle = new EventEmitter<boolean>();

  constructor(private readonly router: Router) {}

  modules: Module[] = [
    { name: 'Dashboard', icon: 'fa fa-tachometer-alt', route: '/' },
    // {
    //   name: 'Reports',
    //   icon: 'fa fa-chart-line',
    //   route: '/reports',
    //   subModules: [{ name: 'Sales' }, { name: 'Expenses' }],
    // },
    { name: 'Users', icon: 'fa fa-users', route: '/users' },
    { name: 'Organizations', icon: 'fa fa-sitemap', route: '/organizations' },
  ];

  navigate(module: Module) {
    this.router.navigate([module.route]);
    if (module.subModules?.length) {
      this.toggleSubMenu(module.name);
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggle.emit(this.isSidebarOpen);
  }

  toggleSubMenu(moduleName: string) {
    this.activeModule = this.activeModule === moduleName ? null : moduleName;
  }
}
