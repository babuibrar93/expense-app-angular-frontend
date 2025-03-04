import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private localStorageService: LocalStorageService) {}

  isAuthenticated(): boolean {
    return !!this.localStorageService.getItem('token');
  }

  currentUser(): IUser | null {
    return this.localStorageService.getItem('user');
  }
}
