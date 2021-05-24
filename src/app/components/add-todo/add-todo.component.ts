import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  showValidationErrors!: boolean;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    const todo = new Todo(form.value.text);
    if (form.invalid) {
      this.showValidationErrors = true;
      return;
    }

    this.todoService.addTodo(todo);
    this.notificationService.show('Todo Created');
    this.router.navigateByUrl('/todos');
  }
}
