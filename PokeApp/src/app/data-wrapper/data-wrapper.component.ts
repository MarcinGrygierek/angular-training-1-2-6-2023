import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../interfaces';

@Component({
  selector: 'app-data-wrapper',
  templateUrl: './data-wrapper.component.html',
  styleUrls: ['./data-wrapper.component.scss']
})
export class DataWrapperComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
