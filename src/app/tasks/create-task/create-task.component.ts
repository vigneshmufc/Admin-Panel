import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask } from '../tasks.interface';
import { TasksService } from '../tasks.service';


type MODE = 'CREATE' | 'EDIT';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  taskForm
  mode: MODE = 'CREATE'
  constructor(private readonly fb: FormBuilder, private dialogRef: MatDialogRef<CreateTaskComponent>, private readonly taskService: TasksService, @Inject(MAT_DIALOG_DATA) public data: { task: ITask }) { }

  ngOnInit(): void {
    this.mode = "CREATE"
    this.taskForm = this.fb.group({
      name: ["", [Validators.required]],
      project: ["", [Validators.required]],
      comments: [""]
    })
    if (this.data?.task) {
      this.mode = "EDIT"
      this.taskForm.setValue({
        name: this.data.task.name,
        project: this.data.task.project,
        comments: this.data.task.comments
      })
    }
  }

  createOrModifyTask() {
    console.log(this.taskForm.value);
    this.mode === "CREATE" ? this.taskService.addTask(this.taskForm.value) : this.taskService.editTask(this.data.task.id, this.taskForm.value);
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
