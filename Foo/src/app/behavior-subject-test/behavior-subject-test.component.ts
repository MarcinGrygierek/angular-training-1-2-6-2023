import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'app-behavior-subject-test',
  templateUrl: './behavior-subject-test.component.html',
  styleUrls: ['./behavior-subject-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BehaviorSubjectTestComponent implements OnInit {
  values = new BehaviorSubject<number[]>([]);
  filteredValues!: Observable<number[]>;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.generateNewValue();
    }, 1000);

    this.filteredValues = this.values.pipe(
      map(array => array.filter(val => val % 2 === 0))
    )
  }

  generateNewValue() {
    const currentValues = this.values.getValue();
    const randomValue = Math.round(Math.random() * 1000);
    this.values.next([...currentValues, randomValue])
  }
}
