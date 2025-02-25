import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  username: string = 'John Doe';
  userAvatar: string = 'assets/avatar-placeholder.png';
  isUserMenuOpen: boolean = false;

  constructor(
    private eRef: ElementRef,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    // Initialize any necessary data
  }

  handleDropdownAction(label: string) {}

  toggleSidebar(): void {
    // Emit event to parent component to toggle sidebar
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
    this.isUserMenuOpen = false;
  }

  logout(): void {
    this.localStorageService.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isUserMenuOpen = false;
    }
  }
}
