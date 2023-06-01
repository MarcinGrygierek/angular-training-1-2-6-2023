import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription, tap, startWith, fromEvent, map, debounceTime, distinctUntilChanged} from 'rxjs';

@Component({
  selector: 'app-smart-input',
  templateUrl: './smart-input.component.html',
  styleUrls: ['./smart-input.component.scss']
})
export class SmartInputComponent implements OnInit {
  @ViewChild('input', { static: true }) input!: ElementRef;
  
  inputSub!: Subscription;

  constructor() { }

  ngOnInit(): void {
    console.log(this.input);
  
    this.inputSub = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map((event: any) => event.target.value),
        startWith(''),
        distinctUntilChanged(),
      )
      .subscribe((val: string) => {
        console.log('Sub', val);
      })
  }

}
