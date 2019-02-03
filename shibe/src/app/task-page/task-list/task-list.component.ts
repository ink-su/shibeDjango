import { Component } from '@angular/core';
import { Task } from '../../task';
import ( TaskListService ) from './task-list.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [TaskListService]
})
export class TaskListComponent {

  title = 'To Do List';
  taskDataService: TaskDataService;

  constructor(private taskDataService: TaskListService) {
    this.taskDataService = taskDataService;
  }
  addTask() {
    this.taskDataService.addTask(this.newtask);
    this.newtask = new Task();
  }

  toggleTaskComplete(task: Task) {
    this.TaskListService.toggleTaskComplete(task);
  }

  toggleTaskComplete(task: Task) {
     this.taskDataService.toggletaskComplete(task);
   }

   removeTask(task: Task) {
     this.taskDataService.deleteTaskById(task.id);
   }

   get tasks() {
     return this.taskDataService.getAlltasks();
   }



}
