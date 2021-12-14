import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ITask, TASK_DATA } from './tasks.interface';
import { TasksService } from './tasks.service';






@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['id', 'name', 'project', 'comments', 'edit', 'delete'];
  constructor(private dialog: MatDialog, private readonly taskService: TasksService) { }

  ngOnInit(): void {
    this.dataSource = this.taskService.tasks$;

  }

  editTask(task: ITask) {
    this.dialog.open(CreateTaskComponent, {
      width: '500px',
      data: {
        task
      }
    })
  }

  createTask() {
    this.dialog.open(CreateTaskComponent, {
      width: '500px'
    });
  }

  deleteTask(id) {
    this.taskService.deleteTask(id);
  }

}
