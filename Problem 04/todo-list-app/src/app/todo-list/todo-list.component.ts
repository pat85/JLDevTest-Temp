// src/app/todo-list/todo-list.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTaskDescription: string = '';

  addTask(): void {
    if (this.newTaskDescription.trim()) {
      this.tasks.push({ description: this.newTaskDescription, completed: false });
      this.newTaskDescription = '';
      this.saveTasks();
    }
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  toggleCompletion(task: Task): void {
    task.completed = !task.completed;
    this.saveTasks();
  }

  editTask(task: Task, newDescription: string): void {
    task.description = newDescription;
    this.saveTasks();
  }

  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks(): void {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  ngOnInit(): void {
    this.loadTasks();
  }
}
