import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos!: Todo[];

  constructor() {
    this.loadState();
  }

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find((n) => n.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.saveState();
  }

  updateTodo(id: string, updateFields: Partial<Todo>) {
    const todo = this.getTodo(id);
    Object.assign(todo, updateFields);
    this.saveState();
  }

  deleteTodo(id: string) {
    const toIndex = this.todos.findIndex((n) => n.id === id);
    if (toIndex == -1) return;
    this.todos.splice(toIndex, 1);
    this.saveState();
  }

  saveState() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadState() {
    const todosInStorage = JSON.parse(localStorage.getItem('todos') || '[]');
    this.todos = todosInStorage;
  }
}
