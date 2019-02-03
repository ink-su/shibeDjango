import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})



@Injectable()

export class TaskListService {

  lastId: number = 0;
  tasks: Task[] = [];

  constructor() {
  }

  // Simulate POST /tasks
  addTask(task: Task): TaskListService {
    if (!task.id) {
      task.id = ++this.lastId;
    }
    this.tasks.push(task);
    return this;
  }

  // Simulate DELETE /tasks/:id
  deletetaskById(id: number): TaskListService {
    this.tasks = this.tasks
      .filter(task => task.id !== id);
    return this;
  }

  // Simulate PUT /tasks/:id
  updatetaskById(id: number, values: Object = {}): Task {
    let task = this.gettaskById(id);
    if (!task) {
      return null;
    }
    Object.assign(task, values);
    return task;
  }

  // Simulate GET /tasks
  getAlltasks(): Task[] {
    return this.tasks;
  }

  // Simulate GET /tasks/:id
  gettaskById(id: number): Task {
    return this.tasks
      .filter(task => task.id === id)
      .pop();
  }

  // Toggle task complete
  toggletaskComplete(task: Task){
    let updatedtask = this.updatetaskById(task.id, {
      complete: !task.complete
    });
    return updatedtask;
  }

}
