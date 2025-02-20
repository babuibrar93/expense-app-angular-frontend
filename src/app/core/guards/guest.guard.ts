import { CanActivate, CanMatch, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate, CanMatch {
  constructor(private router: Router, private authService: AuthService) {}

  checkAuth(): boolean | UrlTree {
    return this.authService.isAuthenticated() ? this.router.createUrlTree(['/']) : true;
  }

  canActivate(): boolean | UrlTree {
    return this.checkAuth();
  }

  canMatch(): boolean | UrlTree {
    return this.checkAuth();
  }
}
