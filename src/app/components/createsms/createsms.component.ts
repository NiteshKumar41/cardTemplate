import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-createsms',
  templateUrl: './createsms.component.html',
  styleUrls: ['./createsms.component.css'],
})
export class CreatesmsComponent implements OnInit {
  title: string;
  Message: string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  click: boolean;
  constructor() {}

  ngOnInit(): void {}

  onSub() {
    const todo = {
      title: this.title,
      Message: this.Message,
      active: true,
    };
    if (this.title == null && this.Message == null) {
      this.click = false;
    } else {
      console.log(todo);
      this.addTodo.emit(todo);
    }
  }
}
