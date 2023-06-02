import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Pokemon } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private pokemon = new BehaviorSubject<Pokemon | null>(null);
  public pokemon$ = new Observable<Pokemon | null>;

  constructor(private api: ApiService) { 
    this.pokemon$ = this.pokemon.asObservable();
  }

  getData(id: number) {
    this.api.get<Pokemon>(`pokemon/${id}`).subscribe(pokemon => {
      this.pokemon.next(pokemon);
    })
  }
}
