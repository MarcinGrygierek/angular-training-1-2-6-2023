import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { mergeMap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  form = this.fb.group({
    search: ['']
  })

  ngOnInit(): void {
    this.form.valueChanges.subscribe(newValues => {
      console.log(newValues);
    })

    this.form.get('search')?.valueChanges.pipe(
      mergeMap(query => this.http.get(`https://api.tvmaze.com/search/shows?q=${query}`).pipe(
        catchError(() => of(null))
      ))
    ).subscribe(pokemon => {
      console.log(pokemon);
    })
  }

}
