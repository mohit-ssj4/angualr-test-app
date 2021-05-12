import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [new Todo('First Todo'), new Todo('Second Todo')];

  constructor() {}

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find((n) => n.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(id: string, updateFields: Partial<Todo>) {
    const todo = this.getTodo(id);
    Object.assign(todo, updateFields);
  }

  deleteTodo(id: string) {
    const toIndex = this.todos.findIndex((n) => n.id === id);
    if (toIndex == -1) return;
    this.todos.splice(toIndex, 1);
  }
}
