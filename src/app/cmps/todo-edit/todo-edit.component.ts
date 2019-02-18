import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TodoService } from 'src/app/services/todo.service';
import { ACTION_ADD, ACTION_UPDATE } from 'src/app/store/actions/appActions';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  @Input() todo: Todo
  @Output() setEditeFasle = new EventEmitter()

  todoForm: FormGroup

  constructor(private todoService: TodoService) { }
  @ViewChild("txt") nameField: ElementRef;

  ngOnInit() {
    this.setForm()
    this.setTodoEdit()
    this.nameField.nativeElement.focus();
  }
  addTodo() {
    if (this.todoForm.invalid) return
    if (this.todo) {
      this.todoService.updateState({
        action: ACTION_UPDATE,
        payload: { txt: this.todoForm.value.txt, id: this.todo.id }
      })
      this.setEditeFasle.emit()
    } else {
      this.todoService.addToState({
        action: ACTION_ADD,
        payload: { txt: this.todoForm.value.txt }
      })
    }

    this.todoForm.reset()
  }
  setTodoEdit() {
    if (!this.todo) return
    this.todoForm.setValue({
      txt: this.todo.txt,
    })
  }
  setForm() {
    this.todoForm = new FormGroup({
      txt: new FormControl(null, {
        validators: [Validators.required]
      })
    })
  }
}
