import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { API_ENDPOINTS } from '../../core/constants/api-endpoint.constant';
import { IApiResponse } from '../../core/models/basic.interface';
import { IModule } from '../../core/models/layout.interface';
import { ApiService } from '../../core/services/api.service';

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
export class SidebarComponent implements OnInit {
  isSidebarOpen = true;
  activeModule: string | null = null;
  modules: IModule[] = [];

  // Create an event emitter to send data to the parent
  @Output() sidebarToggle = new EventEmitter<boolean>();

  constructor(
    private readonly router: Router,
    private readonly apiService: ApiService // private readonly loadingService: LoadingService, // private readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.fetchSidebarModules();
  }

  // modules: IModule[] = [
  //   { name: 'Dashboardss', icon: 'fa fa-tachometer-alt', route: '/' },
  //   // {
  //   //   name: 'Reports',
  //   //   icon: 'fa fa-chart-line',
  //   //   route: '/reports',
  //   //   subModules: [{ name: 'Sales' }, { name: 'Expenses' }],
  //   // },
  //   { name: 'Users', icon: 'fa fa-users', route: '/users' },
  //   { name: 'Organizations', icon: 'fa fa-sitemap', route: '/organizations' },
  // ];

  navigate(module: IModule) {
    this.router.navigate(['/']);
    if (module.SubModules?.length) {
      this.toggleSubMenu(module.Name);
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggle.emit(this.isSidebarOpen);
  }

  toggleSubMenu(moduleName: string) {
    this.activeModule = this.activeModule === moduleName ? null : moduleName;
  }

  fetchSidebarModules() {
    this.apiService
      .get<IApiResponse>(API_ENDPOINTS.MODULE.FETCH_ALL_MODULES)
      .subscribe((response) => {
        this.modules = response.data;
      });
  }
}
