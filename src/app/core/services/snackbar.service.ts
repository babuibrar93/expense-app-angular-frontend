import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { snackbarConfig } from '../../../../snackbar.config';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  // Show error snackbar
  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      ...snackbarConfig,
      panelClass: 'error-snackbar',
    });
  }

  // Show success snackbar
  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      ...snackbarConfig,
      panelClass: 'success-snackbar',
    });
  }
}
