import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-preview',
  templateUrl: './todo-preview.component.html',
  styleUrls: ['./todo-preview.component.scss']
})
export class TodoPreviewComponent implements OnInit {
  @Input() todo : Todo
  @Output() removeTodo = new EventEmitter();
  @Output() editTodo = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }
  onRemoveTodo(todoId){
    this.removeTodo.emit(todoId)
  }
}
