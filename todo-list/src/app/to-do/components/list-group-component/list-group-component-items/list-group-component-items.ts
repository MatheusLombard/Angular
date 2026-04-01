import { Component, input, inject } from '@angular/core';
import type{ Task } from '../../../interface/task';
import { TasksService } from '../../../services/tasks-service';

@Component({
  selector: 'app-list-group-component-items',
  imports: [],
  templateUrl: './list-group-component-items.html',
  styleUrl: './list-group-component-items.css',
})
export class ListGroupComponentItems {

  labelTasks = input.required<Task>();
  tasks = inject(TasksService)

  markAsRead() {
    this.tasks.updateTask(this.labelTasks())
  }

  delete(){
    console.log(this.labelTasks().id)
    this.tasks.deleteTask(this.labelTasks())
  }
}
