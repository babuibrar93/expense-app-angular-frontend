import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { IApiResponse } from '../../core/models/basic.interface';

@Component({
  selector: 'app-default-layout',
  standalone: false,
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css',
})
export class DefaultLayoutComponent implements OnInit {
  title = signal('Expense App');
  isSidebarOpen = true;

  constructor(private apiService: ApiService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    // document.cookie;
    if (!this.localStorageService.hasKey('token')) {
      this.apiService
        .get<any>('auth/token')
        .subscribe((response) => this.localStorageService.setItem('token', response.token));
    }
  }

  handleSidebarToggle(isSidebarOpen: boolean) {
    this.isSidebarOpen = isSidebarOpen;
  }
}
