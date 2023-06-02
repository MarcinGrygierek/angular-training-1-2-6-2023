import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, retry, catchError, of, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly API_URL = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
      if(error.status === 404) {
        console.log('Not found')
      }

      return of(null);
  }

  public get<T>(url: string) {
    return this.http.get<T>(`${this.API_URL}${url}`)
      .pipe(
        retry(1),
        catchError(this.handleError),
        filter(val => !!val)
      ) as Observable<T>;
  }
}
