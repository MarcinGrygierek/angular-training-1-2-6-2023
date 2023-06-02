import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon } from '../interfaces';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss']
})
export class PokemonContainerComponent implements OnInit {
  pokemon!: Observable<Pokemon | null>;
  
  constructor(private data: DataService) {
    this.pokemon = this.data.pokemon$;
  }

  ngOnInit(): void {
      this.data.getData(132);
  }

}
