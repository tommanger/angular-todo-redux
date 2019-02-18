import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { ACTION_REMOVE } from 'src/app/store/actions/appActions';
import { Todo } from '../../models/todo.model'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[]
  isEditeds: boolean[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllState().subscribe(state=>{
      console.log(state)
      this.todos = state.todos
    })
    this.setEditedsFasle()
  }
  removeTodo(ev){
    console.log(ev)
    this.todoService.removeFromState({
      action: ACTION_REMOVE,
      payload: ev
    })
  }
  setEditedsFasle(){
    this.isEditeds = this.todos.map(() => false)
  }
}
