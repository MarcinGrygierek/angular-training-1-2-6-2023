import { Component, OnInit } from '@angular/core';
import { AsyncSubject, interval } from 'rxjs';

@Component({
  selector: 'app-async-subject-test',
  templateUrl: './async-subject-test.component.html',
  styleUrls: ['./async-subject-test.component.scss']
})
export class AsyncSubjectTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subject = new AsyncSubject<number>();

    interval(1000).subscribe(subject);

    subject.subscribe(val => console.log('Sub1', val));

    setTimeout(() => {
      subject.subscribe(val => console.log('Sub2', val));
    }, 2000)

    setTimeout(() => {
      subject.complete();
    }, 5000)
   
  }

}
