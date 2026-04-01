import { Component, input } from '@angular/core';
import { ListGroupComponentItems } from "./list-group-component-items/list-group-component-items";
import { Task } from '../../interface/task';

@Component({
  selector: 'list-group-component',
  imports: [ListGroupComponentItems],
  templateUrl: './list-group-component.html',
  styleUrl: './list-group-component.css',
})
export class ListGroupComponent {
  tasks = input.required<Task[]>()
}
