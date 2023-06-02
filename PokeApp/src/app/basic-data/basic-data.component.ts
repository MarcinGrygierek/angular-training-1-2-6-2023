import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../interfaces';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss']
})
export class BasicDataComponent implements OnInit {
  pokemon!: Observable<Pokemon | null>;
  constructor(private data: DataService) { 
    this.pokemon = this.data.pokemon$;
  }

  ngOnInit(): void {
  }

}
