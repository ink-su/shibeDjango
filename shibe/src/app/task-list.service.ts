import {Injectable} from '@angular/core';
import { Task } from './task';

@Injectable()
export class taskListService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for tasks
  tasks: Task[] = [];

  constructor() {
  }

  // Simulate POST /tasks
  addtask(task: Task): taskListService {
    if (!task.id) {
      task.id = ++this.lastId;
    }
    this.tasks.push(task);
    return this;
  }

  // Simulate DELETE /tasks/:id
  deletetaskById(id: number): taskListService {
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
