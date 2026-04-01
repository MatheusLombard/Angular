import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../../components/header-component/header-component";
import { TodoInputComponent } from "../../../components/todo-input-component/todo-input-component";
import { ListGroupComponent } from "../../../components/list-group-component/list-group-component";
import { TasksService } from '../../../services/tasks-service';

@Component({
  selector: 'main-page',
  imports: [HeaderComponent, TodoInputComponent, ListGroupComponent],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  public tasksService = inject(TasksService)
}
