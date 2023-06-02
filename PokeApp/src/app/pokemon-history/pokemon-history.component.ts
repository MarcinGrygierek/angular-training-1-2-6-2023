import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-history',
  templateUrl: './pokemon-history.component.html',
  styleUrls: ['./pokemon-history.component.scss']
})
export class PokemonHistoryComponent {
  history!: Observable<string[]>;

  constructor(private dataService: DataService) {
    this.history = this.dataService.history$;
   }
}
