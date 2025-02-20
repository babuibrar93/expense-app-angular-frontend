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
import { catchError, map } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';
import { SnackbarService } from '../services/snackbar.service';

@Injectable()
export class ApiResponseInterceptor implements HttpInterceptor {
  constructor(private snackbarService: SnackbarService, private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      // Handling successful responses
      map((event: HttpEvent<any>) => {
        this.loadingService.setLoading(true);
        if (event instanceof HttpResponse) {
          this.loadingService.setLoading(false);
          if (event.body && event.body.success)
            this.snackbarService.showSuccess(event.body.message);
        }
        return event;
      }),

      // Handling errors
      catchError(({ error }: HttpErrorResponse) => {
        this.loadingService.setLoading(false);
        if (error) {
          const errorMessage = error.message || 'Something went wrong!';
          this.snackbarService.showError(errorMessage); // Show error message on snackbar
        } else this.snackbarService.showError('Network error or server unreachable!');

        return throwError(error); // Re-throw the error
      })
    );
  }
}
