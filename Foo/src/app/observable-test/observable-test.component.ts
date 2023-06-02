import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.scss']
})
export class ObservableTestComponent implements OnInit, OnDestroy {

  sub1!: Subscription; 
  sub2!: Subscription;
  constructor() { }

  ngOnInit(): void {
    const obs = new Observable(observer => {
      let counter = 0;
      const interval = setInterval(() => {
        observer.next(counter++);
      }, 1000)

      return {
        unsubscribe() {
          clearInterval(interval);
        }
      }
    })
  
    this.sub1 = obs.subscribe(val => console.log('SUB1', val));

    setTimeout(() => {
      this.sub2 = obs.subscribe(val => console.log('SUB2', val));
    }, 2000);

  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
