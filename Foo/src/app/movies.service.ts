import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {retry, catchError, of, filter, Observable} from 'rxjs';
import { Show } from './form-test/form-test.component';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(query: string): Observable<Show[]> {
    return this.http.get(`https://api.tvmaze.com/search/shows?q=${query}`).pipe(
      retry(1),
      catchError(() => of(null)),
      filter(val => !!val)
    ) as Observable<Show[]>
  }
}
