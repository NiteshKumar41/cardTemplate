import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-smsitems',
  templateUrl: './smsitems.component.html',
  styleUrls: ['./smsitems.component.css'],
})
export class SmsitemsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() smsDelete: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick(todo: Todo) {
    this.smsDelete.emit(todo);
    console.log('btn clicked');
  }
}
