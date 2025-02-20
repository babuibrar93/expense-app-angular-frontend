import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

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

  modules = [
    {
      name: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      subModules: [],
    },
    {
      name: 'Reports',
      icon: 'fa fa-chart-line',
      subModules: [{ name: 'Sales' }, { name: 'Expenses' }],
    },
    {
      name: 'Settings',
      icon: 'fa fa-cogs',
      subModules: [],
    },
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggle.emit(this.isSidebarOpen);
  }

  toggleSubMenu(moduleName: string) {
    this.activeModule = this.activeModule === moduleName ? null : moduleName;
  }
}
