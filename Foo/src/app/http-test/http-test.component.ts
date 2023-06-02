import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { debounceTime, Observable, catchError, throwError, retry, of, tap, filter } from 'rxjs';

interface Pokemon {
  name: string;
  base_experience: number;
}

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent {
  apiUrl = 'https://pokeapi.co/api/v2/';
  pokemonObs!: Observable<Pokemon>;
  pokemonName: string = '';
  
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if(error.status === 404) {
      return of("Can not find this pokemon");
    }

    return of({
      name: 'Default pokemon',
      base_experience: 120
    });
    // return throwError(() => Error('Something went wrong'));
  }

  apiGet<T>(url: string) {
    return this.http.get<T>(`${this.apiUrl}${url}`).pipe(
      retry(3),
      catchError(this.handleError),
      tap(val => {
        if(typeof val === "string") console.log('Błąd', val)
      }),
      filter(val => typeof val !== 'string')
    ) as Observable<T>
  }

  getInfo(name: string) {
    this.apiGet<Pokemon>(`pokemon/${name}`).subscribe((pokemon) => {
      this.pokemonName = pokemon.name;
    });
   
  }

}
