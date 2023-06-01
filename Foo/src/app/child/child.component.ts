import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Output() onButtonClick = new EventEmitter<string>();
  constructor() { }

  handleClick() {
    this.onButtonClick.emit('Lorem ipsum');
    this.onButtonClick.emit('Dolor sit amet');
  }
}
