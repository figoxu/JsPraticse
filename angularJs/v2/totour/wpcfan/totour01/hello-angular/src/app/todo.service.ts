import { Injectable } from '@angular/core';
import {Todo} from "./todo";
import {UUID} from 'angular2-uuid'

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  constructor() { }

  addTodo(todoItem:string):Todo[]{
    this.todos.push({
      id:UUID.UUID(),
      desc:todoItem,
      completed:false
    });
    return this.todos
  }
}
