import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponents } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponents],
  templateUrl: './app.html',
  // styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Matheus Lombardi');
}


console.log(App)
