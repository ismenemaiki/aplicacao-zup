import { Router } from '@angular/router';
import { FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  form = this.formBuilder.group({
    id: new FormControl(this.getIncrementId()),
    content: new FormControl(''),
    finished: new FormControl(false)
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    const task: any = {
      id: this.form.value.id,
      content: this.form.value.content,
      finished: this.form.value.finished,
    }

    localStorage.setItem(`task${this.getIncrementId()}`, JSON.stringify(task));
    this.router.navigate(['']);
  }

  getIncrementId(): number {
    return localStorage.length + 1;
  }
}
