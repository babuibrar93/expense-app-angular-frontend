import { CanActivate, CanMatch } from '@angular/router';

import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanMatch {
  constructor(private router: Router, private authService: AuthService) {}

  private checkAuth(): boolean | UrlTree {
    return this.authService.isAuthenticated() ? true : this.router.createUrlTree(['/auth/login']);
  }

  canActivate(): boolean | UrlTree {
    return this.checkAuth();
  }

  canMatch(): boolean | UrlTree {
    return this.checkAuth();
  }
}
