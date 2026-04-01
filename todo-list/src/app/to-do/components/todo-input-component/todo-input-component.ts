import { Component, inject, output, signal } from '@angular/core';
import type { Task } from '../../interface/task';
import { TasksService } from '../../services/tasks-service';

@Component({
  selector: 'todo-input-component',
  imports: [],
  templateUrl: './todo-input-component.html',
  styleUrl: './todo-input-component.css',
})
export class TodoInputComponent {
  labelTask = signal<string>('')
  newTaskOutput = output<Task>()
  oldTasks = inject(TasksService)


  addTask() {
    if(!this.labelTask()){
      console.log(`Erro ao enviar a task`)
      return
    }
    const newTask: Task = {
      id: this.oldTasks.tasks().length + 1,
      label: this.labelTask(),
      read: false,
    }
    this.newTaskOutput.emit(newTask)
    this.labelTask.set('')
  }

}
