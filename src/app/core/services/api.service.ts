import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { CapitalizeObjectKeysPipe } from '../utils/capitalize.utils';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  post<T>(url: string, data: any): Observable<T> {
    const modifiedData = CapitalizeObjectKeysPipe(data);
    return this.http
      .post<T>(`${this.apiUrl}/${url}`, modifiedData, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(
        map((response: T) => {
          return response;
        })
      );
  }

  get<T>(url: string, params?: any): Observable<T> {
    return this.http
      .get<T>(`${this.apiUrl}/${url}`, {
        params: params,
        withCredentials: true,
      })
      .pipe(map((response: T) => response));
  }
}
