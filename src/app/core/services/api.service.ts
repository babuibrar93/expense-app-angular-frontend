import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { catchError, finalize, Observable, takeUntil, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { LocalStorageService } from './local-storage.service';
import { CapitalizeObjectKeys } from '../utils/capitalize.utils';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = environment.apiUrl;
  private destroyRef = inject(DestroyRef);

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService
  ) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.localStorageService.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return token ? headers.set('Authorization', `Bearer ${token}`) : headers;
  }

  private httpOptions(params?: any) {
    return {
      headers: this.getAuthHeaders(),
      params,
      withCredentials: true,
    };
  }

  post<T>(url: string, data: any): Observable<T> {
    const modifiedData = CapitalizeObjectKeys(data);
    return this.http
      .post<T>(`${this.apiUrl}/${url}`, modifiedData, this.httpOptions())
      .pipe(takeUntilDestroyed(this.destroyRef));
  }

  get<T>(url: string, params?: any): Observable<T> {
    return this.http
      .get<T>(`${this.apiUrl}/${url}`, this.httpOptions(params))
      .pipe(takeUntilDestroyed(this.destroyRef));
  }

  update<T>(url: string, data: any): Observable<T> {
    const modifiedData = CapitalizeObjectKeys(data);
    return this.http
      .patch<T>(`${this.apiUrl}/${url}`, modifiedData, this.httpOptions())
      .pipe(takeUntilDestroyed(this.destroyRef));
  }

  delete<T>(url: string): Observable<T> {
    return this.http
      .delete<T>(`${this.apiUrl}/${url}`, this.httpOptions())
      .pipe(takeUntilDestroyed(this.destroyRef));
  }
}
