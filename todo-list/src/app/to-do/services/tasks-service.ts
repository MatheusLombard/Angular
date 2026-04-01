import { effect, Injectable, signal } from '@angular/core';
import type { Task } from '../interface/task';

const tasksFromLocalStorage = (): Task[] => {
  const getTasks = localStorage.getItem('tasks');

  return getTasks ? JSON.parse(getTasks) : [];
};

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = signal<Task[]>(tasksFromLocalStorage());

  saveInLocalStorage = effect(() => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  });
  addTask(newTask: Task): void {
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }
  updateTask(taskToChange: Task) {
    console.log(taskToChange)
    this.tasks.update((oldTasks) => {
      return oldTasks.map((task) => {
        if (task.id === taskToChange.id) {
          task.read = !task.read;
        }
        return task;
      });
    });
      // this.tasks.update((tasks) =>
      //   tasks.map((t) => (t.id === taskToChange.id ? { ...t, read: !t.read } : t)),    FORMA PARA SIMPLIFICAR
      // );

  }

  deleteTask(taskToDelete: Task) {
    console.log(taskToDelete)
    this.tasks.update((oldTasks) => {
      return oldTasks.filter(task => task.id !== taskToDelete.id)
    });
  }
}
