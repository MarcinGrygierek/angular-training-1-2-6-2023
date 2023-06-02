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

  private history = new BehaviorSubject<string[]>([]);
  public history$ = new Observable<string[]>;

  constructor(private api: ApiService) { 
    this.pokemon$ = this.pokemon.asObservable();
    this.history$ = this.history.asObservable();
  }

  private addToHistory(pokemon: Pokemon) {
    const currentHistory = this.history.getValue();
    this.history.next([...currentHistory, pokemon.name])
  }

  getData(id: number) {
    this.api.get<Pokemon>(`pokemon/${id}`).subscribe(pokemon => {
      this.pokemon.next(pokemon);
      this.addToHistory(pokemon);
    })
  }
}
