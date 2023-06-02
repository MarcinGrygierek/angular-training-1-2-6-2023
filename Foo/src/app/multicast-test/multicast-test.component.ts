import { Component, OnInit } from '@angular/core';
import { publish, multicast, share, interval, Subject, ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-multicast-test',
  templateUrl: './multicast-test.component.html',
  styleUrls: ['./multicast-test.component.scss']
})
export class MulticastTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source = interval(1000);
    // const publishedSource = publish()(source);

    // publishedSource.subscribe(val => console.log('Publish1', val));

    // setTimeout(() => {
    //   publishedSource.subscribe(val => console.log('Publish2', val));
    // }, 2000);

    // publishedSource.connect();

    // const multicastedSource = source.pipe(multicast(new Subject())) as ConnectableObservable<number>;

    // multicastedSource.subscribe(val => console.log('Multicast1', val));

    // setTimeout(() => {
    //   multicastedSource.subscribe(val => console.log('Multicast2', val));
    // }, 2000);

    // multicastedSource.connect();

    const source = interval(1000);
    const sharedSource = source.pipe(share());

    sharedSource.subscribe(val => console.log('Shared1', val));

    setTimeout(() => {
      sharedSource.subscribe(val => console.log('Shared2', val));
    }, 2000);
  }

}
