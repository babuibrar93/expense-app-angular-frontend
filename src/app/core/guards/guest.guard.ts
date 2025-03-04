import { Injectable } from '@angular/core';
import { CanActivate, CanMatch, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate, CanMatch {
  constructor(private router: Router, private authService: AuthService) {}

  private checkAuth(): boolean | UrlTree {
    const isAuthenticated = this.authService.isAuthenticated();
    return isAuthenticated ? this.router.createUrlTree(['/']) : true;
  }

  canActivate(): boolean | UrlTree {
    return this.checkAuth();
  }

  canMatch(): boolean | UrlTree {
    return this.checkAuth();
  }
}
