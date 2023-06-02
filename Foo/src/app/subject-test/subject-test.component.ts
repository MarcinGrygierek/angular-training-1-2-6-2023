import { Component, OnInit } from '@angular/core';
import { Subject, ReplaySubject, interval } from 'rxjs';

@Component({
  selector: 'app-subject-test',
  templateUrl: './subject-test.component.html',
  styleUrls: ['./subject-test.component.scss']
})
export class SubjectTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const subject = new Subject<number>();
    const subject = new ReplaySubject<number>(3);

    interval(1000).subscribe(subject);

    subject.subscribe(val => console.log('SUB1', val));

    setTimeout(() => {
      subject.subscribe(val => console.log('SUB2', val));

    }, 5000)
  }

}
