import { Component } from '@angular/core';
import { title } from 'node:process';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css',
})
export class TaskListComponentComponent {
  tasks: {
    title:string; completed: boolean
  }[] = 
  [
    { title: 'Tarea 1', completed: false },
    { title: 'Tarea 2', completed: false },
  ]

  newTask: string = '';

  addTask(){
    if (this.newTask.trim()) {
      this.tasks.push({ title: this.newTask, completed: false });
      this.newTask = '';
    }
  }
  completeTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
