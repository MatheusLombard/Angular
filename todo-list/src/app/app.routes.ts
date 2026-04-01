import { Routes } from '@angular/router';
import { MainPage } from './to-do/page/main/main-page/main-page';

export const routes: Routes = [
  {
    path: "**",
    component: MainPage,
  }
];
