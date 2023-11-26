import { Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: '**', component: NotfoundComponent },
];
