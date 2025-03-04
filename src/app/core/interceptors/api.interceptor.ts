import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';
import { SnackbarService } from '../services/snackbar.service';

@Injectable()
export class ApiResponseInterceptor implements HttpInterceptor {
  constructor(private snackbarService: SnackbarService, private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Start loading indicator
    this.loadingService.setLoading(true);

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.body?.success && req.method !== 'GET') {
          this.snackbarService.showSuccess(event.body.message);
        }
      }),

      catchError((error: HttpErrorResponse) => {
        this.loadingService.setLoading(false);
        const errorMessage = error?.error?.message || 'Something went wrong!';
        this.snackbarService.showError(errorMessage);
        return throwError(() => error); // Proper error re-throwing
      }),

      finalize(() => this.loadingService.setLoading(false)) // Ensure loading stops
    );
  }
}
