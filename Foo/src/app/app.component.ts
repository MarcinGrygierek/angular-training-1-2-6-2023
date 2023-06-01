import { Component, OnInit } from '@angular/core';
import { map, filter, from, scan, interval, timer, take, takeUntil, tap, startWith, debounceTime, distinctUntilChanged, combineLatest, forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
     
    interval(500)
    .pipe(
      tap(val => {
        if(val === 2) console.log('Found it!');
      }),
      takeUntil(timer(2000))
    )
    .subscribe((val) => console.log('Timer 1', val))

}
}
