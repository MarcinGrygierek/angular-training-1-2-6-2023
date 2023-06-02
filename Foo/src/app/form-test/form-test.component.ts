import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { switchMap, debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { MoviesService } from '../movies.service';

export interface Show {
  show: {
    name: string;
  }
}

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {

  results!: Observable<Show[]>;

  constructor(private fb: FormBuilder, private moviesService: MoviesService) { }

  form = this.fb.group({
    search: ['']
  })

  ngOnInit(): void {
   this.results = this.form.controls.search.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.moviesService.getMovies(query || ''))
    )
  }

}
