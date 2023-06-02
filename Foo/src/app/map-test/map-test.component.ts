import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, of, delay, interval, publish, tap, mergeMap, exhaustMap, switchMap, concatMap, map } from 'rxjs';

@Component({
  selector: 'app-map-test',
  templateUrl: './map-test.component.html',
  styleUrls: ['./map-test.component.scss']
})
export class MapTestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const source = interval(1000)
const publishedSource = publish()(source.pipe())
const sub1 = publishedSource.subscribe(val => console.log('SUB1', val));

publishedSource.connect()

setTimeout(() => {
  const sub2 = publishedSource.subscribe(val => console.log('SUB2', val));
}, 2000);

  }

}
