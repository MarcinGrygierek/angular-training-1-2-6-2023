import { Component } from '@angular/core';
import { Pokemon } from '../interfaces';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss']
})
export class PokemonContainerComponent {
  pokemon!: Observable<Pokemon | null>;

  constructor(private data: DataService) {
    this.pokemon = this.data.pokemon$;
  }

  getData(id: number): void {
      this.data.getData(id);
  }

}
