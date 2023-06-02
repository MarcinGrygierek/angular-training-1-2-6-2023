import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expanded-data',
  templateUrl: './expanded-data.component.html',
  styleUrls: ['./expanded-data.component.scss']
})
export class ExpandedDataComponent implements OnInit {
  pokemon!: Observable<Pokemon | null>;

  constructor(private data: DataService) {
    this.pokemon = this.data.pokemon$;
  }

  ngOnInit(): void {
  }

}
