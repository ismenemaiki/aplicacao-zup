import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask } from '../shared/interfaces/ITask.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  taskList: Array<ITask> = [];
  editItem: ITask = {} as ITask;
  idItem: any;
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idItem = Number(params['id'])
      this.editItem = JSON.parse(localStorage.getItem(`task${this.idItem}`)!);

      console.log('ITEM', this.editItem);

      this.form = this.formBuilder.group({
        id: new FormControl(this.editItem.id),
        content: new FormControl(this.editItem.content),
        finished: new FormControl(this.editItem.finished)
      });
    });
  }

  onSubmit(): void {
    const task: any = {
      id: this.form.value.id,
      content: this.form.value.content,
      finished: this.form.value.finished,
    }
    localStorage.removeItem(`task${this.idItem}`);
    localStorage.setItem(`task${this.idItem}`, JSON.stringify(task));
    this.router.navigate(['']);
  }
}

