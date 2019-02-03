import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './app-page/task-list/task-list.component';
import { GameComponent } from './game/game.component';
const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
//  { path: 'calendar', component: CalendarComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
