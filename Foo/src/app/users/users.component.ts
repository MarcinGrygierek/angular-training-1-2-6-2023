import { Component, OnInit } from '@angular/core';
import { timer, startWith, interval, map, from, of, take, combineLatest, forkJoin } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const history = interval(5000).pipe(
      take(5),
      startWith('Initial message'), 
      map(count => `Message ${count}`)
      );
    const users = from(['Marcin', 'Anna', 'John', 'Jane']);

    combineLatest([users, history]).subscribe(result => {
      console.log(result);
    })

    forkJoin([history, users]).subscribe(result => {
      console.log('Fork join result', result);
    })    
  }

}
