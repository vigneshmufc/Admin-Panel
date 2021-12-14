import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask, TASK_DATA } from './tasks.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  taskList;
  currentId = 4;
  tasks$ = new BehaviorSubject<ITask[]>(TASK_DATA);
  constructor() {
    this.taskList = TASK_DATA;
  }

  addTask(task) {
    this.taskList.push({ ...task, ...{ id: this.currentId } });
    this.currentId++;
    this.tasks$.next(JSON.parse(JSON.stringify(this.taskList)));
    console.log(this.taskList);
  }

  editTask(id, task) {
    const curerntTaskIndex = this.taskList.findIndex((task) => task.id === id);
    this.taskList[curerntTaskIndex] = { ...this.taskList[curerntTaskIndex], ...task };
    this.tasks$.next(JSON.parse(JSON.stringify(this.taskList)));
  }

  deleteTask(id) {
    this.taskList = this.taskList.filter((task) => task.id !== id);
    this.tasks$.next(JSON.parse(JSON.stringify(this.taskList)));
    this.currentId--;
  }
}
