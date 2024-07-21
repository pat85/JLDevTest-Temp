// src/app/app.component.ts
import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  template: '<app-todo-list></app-todo-list>',
  standalone: true,
  imports: [TodoListComponent],
})
export class AppComponent {}
