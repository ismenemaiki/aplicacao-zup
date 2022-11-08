import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../shared/interfaces/ITask.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskList: Array<ITask> = [];

  pendingList: Array<ITask> = [];
  completeList: Array<ITask> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < localStorage.length; i++) {
      this.taskList.push(JSON.parse(localStorage.getItem(`task${i + 1}`)!))
    }

    this.taskList.forEach((task) => {
      if (task.finished === true) {
        if (this.completeList.length <= 2) {
          this.completeList.push(task);
        }
      } else {
        this.pendingList.push(task)
      }
    });
    console.log('LISTA: ', this.completeList);
  }

  selectItem(id: any): void {
    this.router.navigate(['add-edit', id])
  }
}
