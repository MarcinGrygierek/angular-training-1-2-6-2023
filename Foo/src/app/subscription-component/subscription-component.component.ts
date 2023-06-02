import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscription-component',
  templateUrl: './subscription-component.component.html',
  styleUrls: ['./subscription-component.component.scss']
})
export class SubscriptionComponentComponent implements OnInit {

  constructor() { }

  sub!: Subscription;

  ngOnInit(): void {
    const random = Math.round(Math.random() * 1000)
    this.sub = interval(1000)
    .pipe(
      map(val => `${random} ${val}`)
    )
    .subscribe(console.log)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
