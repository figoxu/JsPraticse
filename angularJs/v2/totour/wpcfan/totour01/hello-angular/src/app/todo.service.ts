import { Injectable } from '@angular/core';
import {Todo} from "./todo";

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  constructor() { }

  addTodo(todoItem:string):Todo[]{
    this.todos.push({
      id:1,
      desc:todoItem,
      completed:false
    });
    return this.todos
  }
}
